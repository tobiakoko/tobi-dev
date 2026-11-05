"""Hand-laid architecture diagrams for the portfolio, in light and dark themes."""
import html

THEMES = {
    "light": dict(bg="#faf9f6", panel="#f1efe9", card="#ffffff", ink="#1c1c1a", muted="#6d6d66", line="#d6d3c9", edge="#6d6d66", accent="#1f6f78"),
    "dark": dict(bg="#111110", panel="#1a1a18", card="#202020", ink="#ededea", muted="#a3a39c", line="#33332f", edge="#a3a39c", accent="#7cc9c4"),
}
FONT = "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif"


class D:
    def __init__(self, w, h, t, title):
        self.w, self.h, self.t, self.title = w, h, THEMES[t], title
        self.parts = []

    def panel(self, x, y, w, h, label):
        t = self.t
        self.parts.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{t["panel"]}" stroke="{t["line"]}"/>')
        self.parts.append(f'<text x="{x+20}" y="{y+30}" font-size="13" letter-spacing="1.8" font-weight="600" fill="{t["muted"]}">{html.escape(label.upper())}</text>')

    def node(self, x, y, w, h, title, lines=(), shape="box", strong=False):
        t = self.t
        if shape == "db":
            r = 12
            self.parts.append(
                f'<path d="M{x},{y+r} a{w/2},{r} 0 0 1 {w},0 v{h-2*r} a{w/2},{r} 0 0 1 {-w},0 z" fill="{t["card"]}" stroke="{t["ink"]}" stroke-width="1.25"/>'
                f'<path d="M{x},{y+r} a{w/2},{r} 0 0 0 {w},0" fill="none" stroke="{t["ink"]}" stroke-width="1.25"/>')
        else:
            self.parts.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{t["card"]}" stroke="{t["accent"] if strong else t["ink"]}" stroke-width="{1.75 if strong else 1.25}"/>')
        n = 1 + len(lines)
        lh = 21
        top = y + h / 2 - (n * lh) / 2 + 15 + (6 if shape == "db" else 0)
        self.parts.append(f'<text x="{x+w/2}" y="{top}" text-anchor="middle" font-size="16" font-weight="600" fill="{t["ink"]}">{html.escape(title)}</text>')
        for i, ln in enumerate(lines):
            self.parts.append(f'<text x="{x+w/2}" y="{top+(i+1)*lh}" text-anchor="middle" font-size="14" fill="{t["muted"]}">{html.escape(ln)}</text>')

    def edge(self, pts, label=None, at=None, dashed=False, anchor="middle"):
        t = self.t
        d = "M" + " L".join(f"{x},{y}" for x, y in pts)
        dash = ' stroke-dasharray="5 5"' if dashed else ""
        self.parts.append(f'<path d="{d}" fill="none" stroke="{t["edge"]}" stroke-width="1.5"{dash} marker-end="url(#arrow)"/>')
        if label:
            lx, ly = at if at else ((pts[0][0] + pts[-1][0]) / 2, (pts[0][1] + pts[-1][1]) / 2)
            wpx = len(label) * 7.1 + 14
            x0 = lx - wpx / 2 if anchor == "middle" else (lx if anchor == "start" else lx - wpx)
            self.parts.append(f'<rect x="{x0}" y="{ly-13}" width="{wpx}" height="22" rx="2" fill="{t["bg"]}"/>')
            self.parts.append(f'<text x="{x0+wpx/2}" y="{ly+3}" text-anchor="middle" font-size="13" fill="{t["ink"]}">{html.escape(label)}</text>')

    def note(self, x, y, text, size=13, anchor="start"):
        self.parts.append(f'<text x="{x}" y="{y}" text-anchor="{anchor}" font-size="{size}" fill="{self.t["muted"]}">{html.escape(text)}</text>')

    def svg(self):
        t = self.t
        head = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {self.w} {self.h}" width="{self.w}" height="{self.h}" '
                f'role="img" aria-label="{html.escape(self.title)}" font-family="{FONT}">'
                f'<title>{html.escape(self.title)}</title>'
                f'<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">'
                f'<path d="M0,1 L9,5 L0,9 z" fill="{t["edge"]}"/></marker></defs>'
                f'<rect width="{self.w}" height="{self.h}" fill="{t["bg"]}"/>')
        return head + "".join(self.parts) + "</svg>"


def lewisville(theme):
    d = D(1600, 980, theme, "Lewisville church website architecture: Next.js on Vercel reading Sanity, with webhook revalidation, a contact API and YouTube")
    d.node(60, 80, 250, 84, "Church staff", ["edit in Sanity Studio"])
    d.node(60, 300, 250, 84, "Visitors", ["phones and desktops"])

    d.panel(370, 40, 560, 900, "Vercel")
    d.node(420, 96, 440, 100, "/api/revalidate", ["checks Sanity's signature,", "refreshes only what changed"])
    d.node(420, 262, 440, 116, "Next.js 16 App Router", ["static, cached pages", "Home and Sermons refresh every 60 s"], strong=True)
    d.node(420, 470, 440, 104, "/api/contact", ["Zod validation, origin check,", "a typed result for each status code"])
    d.node(420, 664, 440, 84, "/api/live", ["live-stream check, cached 60 s"])
    d.note(420, 812, "Every pull request (GitHub Actions, Node 22 and 24):", 13)
    d.note(420, 836, "typecheck, lint, 333 unit tests, 360 browser runs with axe", 13)
    d.note(420, 860, "Preview deployment before each phase merges", 13)

    d.panel(1000, 40, 540, 300, "Sanity")
    d.node(1050, 112, 440, 150, "Content Lake", ["6 fixed pages", "7 lists: leaders, ministries, outreach,", "doctrines, events, sermons, testimonies"], shape="db")

    d.panel(1000, 400, 540, 540, "Services")
    d.node(1050, 456, 440, 80, "Upstash Redis", ["rate limiting"])
    d.node(1050, 566, 440, 80, "Resend", ["form email to the church inbox"])
    d.node(1050, 676, 440, 80, "YouTube", ["public channel feed; player loads on Play"])
    d.node(1050, 786, 440, 80, "Google Analytics", ["loaded in the browser only after consent"])

    # staff -> Sanity, over the top
    d.edge([(310, 122), (340, 122), (340, 18), (1270, 18), (1270, 112)], "publish", at=(800, 18))
    d.edge([(1050, 160), (860, 150)], "signed webhook", at=(955, 140))
    d.edge([(640, 196), (640, 262)], "revalidateTag", at=(652, 230), anchor="start")
    d.edge([(860, 300), (1050, 222)], "reads via lib/data.ts", at=(955, 282))
    d.edge([(310, 330), (420, 330)], "pages", at=(365, 316))
    d.edge([(310, 362), (360, 362), (360, 520), (420, 520)], "forms", at=(338, 450))
    d.edge([(860, 500), (1050, 496)])
    d.edge([(860, 540), (1050, 606)])
    d.edge([(860, 350), (895, 350), (895, 690), (860, 690)])
    d.edge([(860, 722), (1050, 716)])
    return d.svg()


def afromerica(theme):
    d = D(1600, 900, theme, "Afromerica competition platform architecture: Next.js on Vercel with Supabase, Paystack, Resend and Sentry")
    d.node(60, 90, 250, 80, "Fans", ["vote and buy tickets"])
    d.node(60, 230, 250, 80, "Judges", ["score with a voter code"])
    d.node(60, 370, 250, 80, "Admins", ["events, artists, finale"])

    d.panel(370, 40, 560, 820, "Vercel")
    d.node(420, 100, 440, 110, "Next.js 16", ["public pages, voting screens,", "admin dashboard"], strong=True)
    d.node(420, 310, 440, 124, "API routes (23)", ["votes, tickets, finale scoring,", "one-time codes, payments"])
    d.node(420, 560, 440, 124, "/api/payments/webhook", ["HMAC-SHA512 signature, idempotent,", "records the payment in Postgres"])

    d.panel(1000, 40, 540, 420, "Supabase")
    d.node(1050, 96, 440, 76, "Realtime", ["pushes score changes"])
    d.node(1050, 210, 440, 124, "Postgres", ["row-level security,", "weighted scoring functions"], shape="db")
    d.node(1050, 366, 440, 64, "Auth", [])

    d.panel(1000, 500, 540, 360, "Services")
    d.node(1050, 552, 440, 76, "Paystack", ["checkout for votes and tickets"])
    d.node(1050, 656, 440, 76, "Resend", ["one-time codes and confirmations"])
    d.node(1050, 760, 440, 76, "Sentry", ["errors from server and browser"])

    for y in (130, 270, 410):
        d.edge([(310, y), (420, 155 + (y - 270) / 8)])
    d.edge([(640, 210), (640, 310)])
    d.edge([(1050, 134), (860, 150)], "live leaderboard", at=(955, 128))
    d.edge([(1270, 210), (1270, 172)])
    d.edge([(860, 350), (1050, 272)], "queries", at=(955, 300))
    d.edge([(860, 400), (1050, 398)], "sessions", at=(955, 386))
    d.edge([(860, 425), (900, 425), (900, 590), (1050, 590)], "start payment", at=(965, 578))
    d.edge([(1050, 610), (860, 615)], "charge.success", at=(955, 632))
    d.edge([(860, 660), (1050, 694)], "confirmations", at=(955, 692))
    return d.svg()


if __name__ == "__main__":
    import sys
    out = sys.argv[1]
    for name, fn in (("lewisville", lewisville), ("afromerica", afromerica)):
        for theme in THEMES:
            with open(f"{out}/{name}-architecture-{theme}.svg", "w") as f:
                f.write(fn(theme))
