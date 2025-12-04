# Blog Content
 
This directory contains all blog posts for the portfolio website. Posts are written in Markdown format with YAML frontmatter.
 
## Adding a New Blog Post
 
1. Create a new `.md` file in this directory
2. Use kebab-case for the filename (e.g., `my-awesome-post.md`)
3. The filename becomes the URL slug: `/blog/my-awesome-post`
 
## Frontmatter Format
 
Each blog post must include the following frontmatter:
 
```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
author: "Daniel Akoko"
excerpt: "A brief description that appears in the blog listing"
category: "Category Name"
readTime: "X min read"
published: true
---
 
Your markdown content starts here...
```
 
### Frontmatter Fields
 
- **title** (required): The post title
- **date** (required): Publication date in YYYY-MM-DD format
- **author** (required): Author name
- **excerpt** (required): Brief description (1-2 sentences)
- **category** (required): Post category for organization
- **readTime** (required): Estimated reading time
- **published** (required): Set to `false` to hide from listing
 
## Markdown Features
 
You can use all standard Markdown features:
 
### Headings
 
```markdown
## H2 Heading
### H3 Heading
```
 
### Text Formatting
 
```markdown
**Bold text**
*Italic text*
`Inline code`
```
 
### Lists
 
```markdown
- Unordered item 1
- Unordered item 2
 
1. Ordered item 1
2. Ordered item 2
```
 
### Links
 
```markdown
[Link text](https://example.com)
```
 
### Code Blocks
 
````markdown
```javascript
function hello() {
  console.log("Hello, world!")
}
```
````
 
### Images
 
```markdown
![Alt text](/path/to/image.png)
```
 
## Example Post
 
See `hello-world.md` and `what-was-your-win-this-week.md` for examples.
 
## Post Organization
 
- Keep filenames concise and descriptive
- Use consistent date format (YYYY-MM-DD)
- Choose clear, specific categories
- Write compelling excerpts that encourage clicks
 
## Categories
 
Common categories to use:
- Personal Development
- Software Engineering
- Web Development
- React
- TypeScript
- Career
- Tutorials
- General
 
## Best Practices
 
1. **Write for Humans**: Clear, conversational tone
2. **Use Headings**: Break up content with ## and ###
3. **Add Examples**: Code snippets and practical examples
4. **Proofread**: Check spelling and grammar
5. **Optimize Length**: 500-2000 words is ideal
6. **Be Consistent**: Regular publishing schedule
 
## Publishing Process
 
1. Write your post in markdown
2. Test locally with `npm run dev`
3. Review the post at `/blog/your-post-slug`
4. Commit and push to deploy
 
## Drafts
 
To save a draft without publishing:
 
```markdown
---
published: false
# ... other frontmatter
---
```
 
Unpublished posts won't appear in the blog listing but can still be accessed directly during development.