# Section 1: Intermediate

## Q1. What are semantic HTML elements, and why are they important for accessibility and SEO?
- Semantic HTML elements are tags that carry inherent meaning about the type of content they hold, instead of just serving as containers for styling or layout. Examples include <header>, <nav>, <main>, <article>, <section>, <footer>, and <aside>.

Examples:

    <header> → Defines the header of a page or section.
    <nav> → Defines a navigation section with links.
    <article> → Represents a self-contained, independent piece of content.
    <section> → Groups related content into a thematic block.
    <footer> → Defines footer content.
    <aside> → Side content, like ads, sidebars, or related links.
    <main> → The main unique content of a document.

For SEO:
    Search engines use semantic structure to understand content hierarchy and context. Elements like <article> and <section> improve how content is indexed, while proper use of <h1>–<h6> inside semantic blocks boosts keyword relevance and discoverability.


## Q2. Explain the difference between inline, block, and inline-block elements.

1. Block Elements

    Definition: Take up the full available width of the parent container, forcing a line break before and after the element.
    Default examples: <div>, <p>, <h1>–<h6>, <section>, <article>.

    Behavior:
    Always start on a new line.
    Can set width, height, margin, padding.
    Use Case: For structural layout and grouping of content.

2. Inline Elements

    Definition: Only take up as much width as the content requires, without forcing a line break.
    Default examples: <span>, <a>, <strong>, <em>.

    Behavior:
    Do not start on a new line.
    Cannot set width/height directly.
    Respect only horizontal margins/padding (vertical margins don’t push other elements).
    Use Case: For styling small pieces of text or content inside block elements.

3. Inline-Block Elements

    Definition: Behave like inline elements (flow in line with text) but allow block-level features.
    Examples (via CSS): display: inline-block; applied to <div> or <li>.

    Behavior:
    Do not force a new line (like inline).
    Allow width, height, margin, and padding to be applied (like block).

    Use Case: Useful for layouts where items need to be side by side but still sized like blocks, e.g., navigation menus, card layouts.