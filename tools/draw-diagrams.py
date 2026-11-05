"""Hand-laid architecture diagrams for the portfolio, in light and dark themes."""
import html

THEMES = {
    "light": dict(bg="#faf9f6", panel="#f1efe9", card="#ffffff", ink="#1c1c1a", muted="#6d6d66", line="#d6d3c9", edge="#6d6d66", accent="#1f6f78"),
    "dark": dict(bg="#111110", panel="#1a1a18", card="#202020", ink="#ededea", muted="#a3a39c", line="#33332f", edge="#a3a39c", accent="#7cc9c4"),
}
FONT = "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif"


class D:
    def __init__(self, w, h, t, title, scale=1):
        self.w, self.h, self.t, self.title, self.s = w, h, THEMES[t], title, scale
        self.parts = []

    def panel(self, x, y, w, h, label):
        t = self.t
        self.parts.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{t["panel"]}" stroke="{t["line"]}"/>')
        self.parts.append(f'<text x="{x+20}" y="{y+30*self.s}" font-size="{13*self.s:g}" letter-spacing="1.8" font-weight="600" fill="{t["muted"]}">{html.escape(label.upper())}</text>')

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
        lh = 21 * self.s
        top = y + h / 2 - (n * lh) / 2 + 15 * self.s + (6 if shape == "db" else 0)
        self.parts.append(f'<text x="{x+w/2}" y="{top:g}" text-anchor="middle" font-size="{16*self.s:g}" font-weight="600" fill="{t["ink"]}">{html.escape(title)}</text>')
        for i, ln in enumerate(lines):
            self.parts.append(f'<text x="{x+w/2}" y="{top+(i+1)*lh:g}" text-anchor="middle" font-size="{14*self.s:g}" fill="{t["muted"]}">{html.escape(ln)}</text>')

    def edge(self, pts, label=None, at=None, dashed=False, anchor="middle"):
        t = self.t
        d = "M" + " L".join(f"{x},{y}" for x, y in pts)
        dash = ' stroke-dasharray="5 5"' if dashed else ""
        self.parts.append(f'<path d="{d}" fill="none" stroke="{t["edge"]}" stroke-width="1.5"{dash} marker-end="url(#arrow)"/>')
        if label:
            lx, ly = at if at else ((pts[0][0] + pts[-1][0]) / 2, (pts[0][1] + pts[-1][1]) / 2)
            wpx = (len(label) * 7.1 + 14) * self.s
            x0 = lx - wpx / 2 if anchor == "middle" else (lx if anchor == "start" else lx - wpx)
            self.parts.append(f'<rect x="{x0:g}" y="{ly-13*self.s:g}" width="{wpx:g}" height="{22*self.s:g}" rx="2" fill="{t["bg"]}"/>')
            self.parts.append(f'<text x="{x0+wpx/2:g}" y="{ly+4*self.s:g}" text-anchor="middle" font-size="{13*self.s:g}" fill="{t["ink"]}">{html.escape(label)}</text>')

    def line(self, pts):
        d = "M" + " L".join(f"{x},{y}" for x, y in pts)
        self.parts.append(f'<path d="{d}" fill="none" stroke="{self.t["edge"]}" stroke-width="1.5"/>')

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


# The site diagrams are 720 wide with text at 1.2x, two columns that read top to
# bottom, so labels stay readable in the page's figure column.
L, R, CW = 30, 415, 275          # left column x, right column x, column width
LN, RN, NW = 50, 435, 235        # node x in each column, node width


def lewisville(theme):
    d = D(720, 1180, theme, "Lewisville church website architecture: Next.js on Vercel reading Sanity, with webhook revalidation, a contact API and YouTube", 1.2)
    d.node(L, 24, CW, 90, "Church staff", ["edit in Sanity Studio"])
    d.node(R, 24, CW, 90, "Visitors", ["phones and desktops"])

    d.panel(L, 170, CW, 310, "Sanity")
    d.node(LN, 225, NW, 230, "Content Lake", ["6 fixed pages", "7 lists: leaders,", "ministries, outreach,", "doctrines, events,", "sermons, testimonies"], shape="db")

    d.panel(L, 520, CW, 420, "Services")
    d.node(LN, 575, NW, 90, "Upstash Redis", ["rate limiting"])
    d.node(LN, 685, NW, 100, "Resend", ["form email to the", "church inbox"])
    d.node(LN, 805, NW, 110, "YouTube", ["public channel feed;", "player loads on Play"])

    d.panel(R, 170, CW, 710, "Vercel")
    d.node(RN, 225, NW, 130, "Next.js 16", ["static, cached pages;", "Home and Sermons", "refresh every 60 s"], strong=True)
    d.node(RN, 395, NW, 125, "/api/revalidate", ["checks Sanity\u2019s", "signature, refreshes", "only what changed"])
    d.node(RN, 560, NW, 150, "/api/contact", ["Zod validation,", "origin check, a typed", "result per status code"])
    d.node(RN, 750, NW, 100, "/api/live", ["live-stream check,", "cached 60 s"])

    d.edge([(167, 114), (167, 166)], "publish", at=(180, 142), anchor="start")
    d.edge([(552, 114), (552, 221)], "pages and forms", at=(564, 142), anchor="start")
    d.edge([(LN + NW, 440), (RN - 4, 440)], "webhook", at=(360, 440))
    d.edge([(RN, 290), (LN + NW + 4, 290)], "reads", at=(360, 290))
    d.edge([(552, 395), (552, 359)])
    d.edge([(RN, 620), (LN + NW + 4, 620)])
    d.edge([(RN, 700), (LN + NW + 4, 700)])
    d.edge([(RN, 830), (LN + NW + 4, 830)])
    d.note(L, 990, "Google Analytics loads in the browser only after consent.", 18)
    d.note(L, 1050, "Every pull request (GitHub Actions, Node 22 and 24):", 18)
    d.note(L, 1078, "typecheck, lint, 333 unit tests, 360 browser runs with axe.", 18)
    d.note(L, 1106, "Preview deployment before each phase merges.", 18)
    return d.svg()


def afromerica(theme):
    d = D(720, 970, theme, "Afromerica competition platform architecture: Next.js on Vercel with Supabase, Paystack, Resend and Sentry", 1.2)
    for x, title, line in ((30, "Fans", "vote, buy tickets"), (257, "Judges", "score with a code"), (484, "Admins", "events and finale")):
        d.node(x, 24, 206, 90, title, [line])
        d.line([(x + 103, 114), (x + 103, 142)])
    d.line([(133, 142), (587, 142)])
    d.edge([(552, 142), (552, 221)])

    d.panel(L, 170, CW, 440, "Supabase")
    d.node(LN, 225, NW, 90, "Realtime", ["pushes score changes"])
    d.node(LN, 345, NW, 150, "Postgres", ["row-level security,", "weighted scoring", "functions"], shape="db")
    d.node(LN, 515, NW, 64, "Auth", [])

    d.panel(L, 640, CW, 300, "Services")
    d.node(LN, 695, NW, 100, "Resend", ["one-time codes and", "confirmations"])
    d.node(LN, 815, NW, 100, "Sentry", ["errors from server", "and browser"])

    d.panel(R, 170, CW, 595, "Vercel")
    d.node(RN, 225, NW, 110, "Next.js 16", ["public pages, voting,", "admin dashboard"], strong=True)
    d.node(RN, 375, NW, 180, "API routes (23)", ["votes, tickets, finale", "scoring, one-time", "codes, payments"])
    d.node(RN, 600, NW, 135, "Payment webhook", ["HMAC-SHA512 signature,", "idempotent, recorded", "in Postgres"])

    d.panel(R, 795, CW, 145, "Payments")
    d.node(RN, 850, NW, 80, "Paystack", ["votes and tickets"])

    d.edge([(LN + NW, 270), (RN - 4, 270)], "live scores", at=(360, 270))
    d.edge([(167, 345), (167, 319)])
    d.edge([(RN, 420), (LN + NW + 4, 420)], "queries", at=(360, 420))
    d.edge([(RN, 545), (LN + NW + 4, 545)], "sessions", at=(360, 545))
    d.edge([(RN, 715), (LN + NW + 4, 715)], "email", at=(360, 715))
    d.edge([(RN + NW, 450), (705, 450), (705, 890), (RN + NW + 4, 890)])
    d.edge([(552, 850), (552, 739)], "charge.success", at=(552, 780))
    return d.svg()


def led_wall_ports(theme):
    # Narrow and tall, so the labels stay readable in the page's figure column.
    d = D(720, 720, theme, "LED wall port map: a NovaStar VX1000 Pro feeds 24 cabinets in a 6 by 4 grid as 8 horizontal chains of 3; the left half runs on power supply A from odd ports, the right half on supply B from even ports")
    t = d.t
    d.node(210, 24, 300, 96, "NovaStar VX1000 Pro", ("8 of 10 ports used, 2 spare",), strong=True)
    pw, ph, gap, px0, py = 315, 404, 30, 30, 210
    cw = (pw - 30) / 3
    chh = cw * 0.75 + 8          # cabinet 640 x 480 mm is 4:3
    for h, label in enumerate(("Power supply A \u00b7 odd ports", "Power supply B \u00b7 even ports")):
        x = px0 + h * (pw + gap)
        d.panel(x, py, pw, ph, label)
        d.edge([(360 + (h * 2 - 1) * 60, 120), (360 + (h * 2 - 1) * 60, 150), (x + pw / 2, 150), (x + pw / 2, py - 4)])
        for row in range(4):
            y = py + 52 + row * (chh + 4)
            for col in range(3):
                d.parts.append(f'<rect x="{x + 15 + col * cw + 4}" y="{y + 4}" width="{cw - 8}" height="{chh - 8}" fill="{t["card"]}" stroke="{t["line"]}"/>')
            # One chain = one row of three cabinets in this half.
            d.parts.append(f'<rect x="{x + 15}" y="{y}" width="{3 * cw}" height="{chh}" fill="none" stroke="{t["accent"]}" stroke-width="1.75"/>')
            d.parts.append(f'<text x="{x + pw / 2}" y="{y + chh / 2 + 7}" text-anchor="middle" font-size="19" font-weight="600" fill="{t["ink"]}">Port {row * 2 + h + 1}</text>')
    d.note(30, 660, "Each chain: 3 cabinets, 589,824 px, 91% of a port\u2019s limit.", 16)
    d.note(30, 690, "24 cabinets (6 \u00d7 4), 3072 \u00d7 1536 px at 60 Hz.", 16)
    return d.svg()


def led_wall_layers(theme):
    d = D(720, 1290, theme, "LED wall configuration layers: five layers from receiving cards up to input and layers, each with the fault found and the fix applied")
    t = d.t
    rows = (
        ("5 \u00b7 Input and layers", "What goes on the canvas", ("Image Mosaic and PIP 1, 2 on;", "main layer only 2048 \u00d7 768"), ("Mosaic and PIP off;", "full-screen 3072 \u00d7 1536 layer")),
        ("4 \u00b7 Controller output", "Total pixels it can drive", ("VX600 rated 3.9M px, wall is 4.7M;", "on the Pro, 3D halved capacity"), ("VX1000 Pro (6.5M px), 3D off,", "3072 \u00d7 1536 @ 60 Hz")),
        ("3 \u00b7 Screen connection", "Port-to-cabinet map", ("Vertical chains of 3 on 4 rows;", "grid still set to 4 \u00d7 2"), ("8 horizontal chains of 3;", "6 \u00d7 4 grid matched to cabling")),
        ("2 \u00b7 Cabinet definition", "Pixels per receiving card", ("Module size 256 \u00d7 128 entered", "as the cabinet size"), ("512 \u00d7 384 per cabinet", "(2 \u00d7 3 modules)")),
        ("1 \u00b7 Receiving cards", "Chip, scan and timing", ("Generic common-chip, static-scan", "profile on all 24 cards"), ("Factory ICND2165, 1/64-scan", "profile loaded and saved")),
    )
    x, w, h, gap, top = 30, 660, 226, 16, 30
    for i, (name, role, fault, fix) in enumerate(rows):
        y = top + i * (h + gap)
        d.parts.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{t["card"]}" stroke="{t["line"]}"/>')
        d.parts.append(f'<rect x="{x}" y="{y}" width="{w}" height="60" fill="{t["panel"]}" stroke="{t["line"]}"/>')
        d.parts.append(f'<text x="{x + 24}" y="{y + 38}" font-size="21" font-weight="600" fill="{t["ink"]}">{html.escape(name)}</text>')
        d.note(x + w - 24, y + 38, role, 16, "end")
        for (label, lines, ly, colour) in (("Fault", fault, y + 96, t["muted"]), ("Fix", fix, y + 172, t["accent"])):
            d.parts.append(f'<text x="{x + 24}" y="{ly}" font-size="13" letter-spacing="1.8" font-weight="600" fill="{colour}">{label.upper()}</text>')
            for j, ln in enumerate(lines):
                d.parts.append(f'<text x="{x + 110}" y="{ly + j * 26}" font-size="18" fill="{t["ink"]}">{html.escape(ln)}</text>')
        d.parts.append(f'<rect x="{x + 96}" y="{y + 152}" width="3" height="56" fill="{t["accent"]}"/>')
    d.note(x, top + 5 * (h + gap) + 24, "Each layer relies on the one below it, and every layer held its own fault.", 16)
    return d.svg()

if __name__ == "__main__":
    import sys
    out = sys.argv[1]
    for name, fn in (("lewisville", lewisville), ("afromerica", afromerica), ("led-wall-ports", led_wall_ports), ("led-wall-layers", led_wall_layers)):
        for theme in THEMES:
            with open(f"{out}/{name}-architecture-{theme}.svg", "w") as f:
                f.write(fn(theme))
