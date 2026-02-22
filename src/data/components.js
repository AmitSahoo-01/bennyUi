export const components = [
  {
    name: "BadgeHover",
    description: "Interactive badge hover effect with circular images and animated badges.",
    previewImage: "/images/badgehover-preview.png",
    files: {
      "BadgeHover.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Badge Hover</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
        <div class="parent">
            <div class="child">
                <div class="circle">
                    <img src="https://images.unsplash.com/photo-1769089220479-5389dc5d2268?w=500&auto=format&fit=crop&q=60" alt="">
                    <div class="badge">HELLO HOW ARE YOU</div>
                </div>

                <div class="circle">
                    <img src="https://images.unsplash.com/photo-1765677707084-d2ac28ad4bf6?w=500&auto=format&fit=crop&q=60" alt="">
                    <div class="badge">HELLO HOW ARE YOU</div>
                </div>
            </div>
        </div>
    </main>
</body>
</html>`,
      "BadgeHover.css": `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui;
}

html, body {
    width: 100%;
    height: 100%;
}

main {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
}

.parent {
    width: 400px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.child {
    width: 220px;
    height: 200px;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
}

/* common circle */
.circle {
    width: 100px;
    height: 100px;
    border: 2px solid white;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

/* image */
.circle img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    transition: transform 0.5s ease;
}

/* badge */
.badge {
    position: absolute;
    top: -45px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid greenyellow;
    padding: 5px 10px;
    font-size: 12px;
    white-space: nowrap;
    border-radius: 20px;
    opacity: 0;
    transition: all 0.4s ease;
    color: white;
}

/* hover effects */
.circle:hover {
    overflow: visible;
}

.circle:hover img {
    transform: scale(1.1);
}

.circle:hover .badge {
    top: -60px;
    opacity: 1;
}`,
      "index.js": `export { default } from "./BadgeHover.html";`,
      "README.md": `# Badge Hover Component

## Installation
Copy the BadgeHover folder into your project.

## Usage
Include the HTML and CSS files in your project:

\`\`\`html
<link rel="stylesheet" href="BadgeHover.css">
\`\`\`

Then add the HTML structure to your page.

## Features
- Circular image containers with hover effects
- Animated badge that appears on hover
- Smooth image scale animation
- Customizable badge text and styling
`
    }
  },
  {
    name: "ExpandHoverAnimation",
    description: "An interactive animation where panels expand on hover and others shrink, creating a smooth and modern UI effect.",
    previewImage: "/src/browse-components/ExpandHoverAnimation/preview.png", // Add preview image later
    files: {
      "ExpandHoverAnimation.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Expand Panels Component</title>

  <link rel="stylesheet" href="expand-panels.css" />
</head>
<body>

  <main class="expand-panels">

    <section class="panel green"></section>
    <section class="panel yellow"></section>
    <section class="panel purple"></section>
    <section class="panel orange"></section>
    <section class="panel pink"></section>

  </main>

</body>
</html>`,
      "ExpandHoverAnimation.css": `/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

html, body {
  width: 100%;
  height: 100%;
  background: black;
}

/* Main Container */
.expand-panels {
  width: 100%;
  height: 100vh;
  background: whitesmoke;
  padding: 10px;
  display: flex;
  gap: 10px;
}

/* Panel Base */
.panel {
  height: 100%;
  flex-grow: 1;
  background-size: cover;
  background-position: center;
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.8s;
  border-radius: 12px;
}

/* Hover Animation */
.panel:hover {
  cursor: pointer;
  flex-grow: 3;
}

/* Panel Colors */
.green { background: green; }
.yellow { background: yellow; }
.purple { background: purple; }
.orange { background: orange; }
.pink { background: pink; }`,
      "index.js": `export { default } from "./ExpandHoverAnimation.html";`,
      "README.md": `# Expand Hover Animation Component

## Installation
Copy the ExpandHoverAnimation folder into your project.

## Usage
Include the HTML and CSS files in your project:

\`\`\`html
<link rel="stylesheet" href="ExpandHoverAnimation.css">
\`\`\`

Then add the HTML structure to your page.

## Features
- 5 colorful expandable panels
- Smooth cubic-bezier animation
- Hover to expand effect
- Responsive flex layout
`
    }
  },
  {
    name: "RadialBackground",
    description: "A Dark Horizon Glow background which you can use any where like Home section background,element background etc.",
    previewImage: "/src/browse-components/RadialBackground/preview.png", // Add preview image later
    files: {
      "RadialBackground.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dark Horizon Glow</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>

    <div class="container">
        <!-- Dark Horizon Glow -->
        <div class="background-glow"></div>

        <!-- Your Content/Components -->
        <div class="content">
            <!-- Yaha apna content daal sakte ho -->
        </div>
    </div>

</body>
</html>`,
      "RadialBackground.css": `/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    width: 100%;
}

.container {
    min-height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
}

.background-glow {
    position: absolute;
    inset: 0;
    z-index: 0;
    background: radial-gradient(
        125% 125% at 50% 90%,
        #000000 40%,
        #0d1a36 100%
    );
}

.content {
    position: relative;
    z-index: 1;
}
`
    }
  },
  {
    name: "CardHover",
    description: "A Customizable Card Hover Effect with Image and Badge.",  
    previewImage: "/src/browse-components/CardHover/preview.png", // Add preview image later
    files: {
      "CardHover.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Hover</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="main">
        <img src="https://images.unsplash.com/photo-1760720221487-5a8b332a2078?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="">
        <div class="bottom">ADD ANYTHING</div>
    </div>
</body>
</html>`,
      "CardHover.css": `/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
     font-family: Arial, Helvetica, sans-serif;
}
html,
body {
    height: 100%;
    width: 100%;
    /* background-color: black; */
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 200px;
}


#main{
    overflow: hidden;
    position: relative;
    height: 350px;
    width: 350px;
    border-radius: 10px;
}

img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.bottom{
    position: absolute;
    display: flex;
    height: 40%;
    width: 100%;
    background: linear-gradient(transparent,rgba(139, 55, 3, 0.411));
    bottom: -40%;
    transition: all ease 0.5s;
    align-items: center;
    justify-content: center;
    color: white;
}

#main:hover .bottom{
    cursor: pointer;
    bottom: 0%;
}
`
    }
  },{
    name: "RadialText",
    description: "A Customizable Radial Text.",  
    previewImage: "/src/browse-components/RadialText/preview.png", // Add preview image later
    files: {
      "RadialText.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=\, initial-scale=1.0">
    <title>Radial-Text</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Amit Sahoo</h1>
</body>
</html>`,
      "RadialText.css": `/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
     font-family: Arial, Helvetica, sans-serif;
}
html,
body {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
h1{
    font-size: 100px;
    font-weight: 800;
    color: transparent;
    text-align: center;
    background: linear-gradient(rgba(0, 0, 170, 0.821),rgb(245, 64, 64),rgb(97, 214, 18));
    background-size: cover;
    background-position: center;
    background-clip: text;
    -webkit-text-stroke: 2px black;
}  
`
    }   
  },{
    name: "CustomCardCursor",
    description: "NOTE-NOW we are Working on react components so dom elemets are not shown in the live preview But you can use it in your system as custom cursor. A Customizable Card Cursor.",  
    previewImage: "/src/browse-components/CustomCardCursor/preview.png", // Add preview image later
    files: {
      "CustomCardCursor.html": `NOW we are Working on react components so dom elemets are not shown in the live preview But you can use it in your system as custom cursor.
      <!-- You should have to use gsap cdn for this project. You can find it on the official gsap website or use a CDN service like jsDelivr or cdnjs. Here is an example of how to include the gsap library in your HTML file using a CDN: -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Cursor</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="cursor"></div>
    <main>
        <div class="imageDiv">
            <div class="overlayer"></div>
            <img src="https://images.unsplash.com/photo-1765466441202-76252154d4fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D" alt="">
        </div>
    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js" integrity="sha512-NcZdtrT77bJr4STcmsGAESr06BYGE8woZdSdEgqnpyqac7sugNO+Tr4bGwGF3MsnEkGKhU2KL2xh6Ec+BqsaHA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="script.js"></script>
</body>
</html>
      `,
      "CustomCardCursor.css": `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
     font-family: Arial, Helvetica, sans-serif;
}
html,
body {
    height: 100%;
    width: 100%;
    background-color: black;
}

.cursor{
    width: 20px;
    height: 20px;
    background-color: rgb(137, 137, 137);
    border-radius: 50%;
    position: fixed;
    z-index: 5;
}


main{
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
}


.imageDiv{
    width: 50vw;
    height: 30vw;
    position: relative;
}

.imageDiv img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    
}

.overlayer{
    width: 100%;
    height: 100%;
    background-color: transparent;
    position: absolute;
    z-index: 10;
}`,
"index.js":`let cursor = document.querySelector(".cursor");

let main = document.querySelector("main");

let imageDiv = document.querySelector(".imageDiv");

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.clientX,
        y:dets.clientY,
        duration:2,
        ease:"back.out"
    })
})

imageDiv.addEventListener("mouseenter",function(dets){
    gsap.to(cursor,{
        scale:3,
        opacity:0.4
    })
})

imageDiv.addEventListener("mouseleave",function(dets){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})` 
    }   
  },{
    name: "TextAnimation",
    description: "A Animation Text coming from down side.",  
    previewImage: "/src/browse-components/TextAnimation/preview.png", // Add preview image later
    files: {
      "TextAnimation.html": `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Text Animation</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<h1>
  <span class="left">A</span>
  <span class="left">m</span>
  <span class="left">i</span>
  <span class="left">t</span>
  <span class="right">S</span>
  <span class="right">a</span>
  <span class="right">h</span>
  <span class="right">o</span>
  <span class="right">o</span>
</h1>

</body>
</html>
`,
      "TextAnimation.css": `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  height: 100vh;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  color: white;
  font-size: 100px;
  overflow: hidden;
}

h1 span {
  display: inline-block;
  opacity: 0;
  transform: translateY(100px);
  animation: reveal 0.5s forwards;
}

/* LEFT side stagger */
.left:nth-child(1) { animation-delay: 0.1s; }
.left:nth-child(2) { animation-delay: 0.2s; }
.left:nth-child(3) { animation-delay: 0.3s; }
.left:nth-child(4) { animation-delay: 0.4s; }

/* RIGHT side reverse stagger */
.right:nth-child(5) { animation-delay: 0.8s; }
.right:nth-child(6) { animation-delay: 0.7s; }
.right:nth-child(7) { animation-delay: 0.6s; }
.right:nth-child(8) { animation-delay: 0.5s; }
.right:nth-child(9) { animation-delay: 0.4s; }

@keyframes reveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`
}  
  },{
    name:"AnimatedArrow",
    description: "A Animated Arrow use as Animating component in your website.",  
    previewImage: "/src/browse-components/AnimatedArrow/preview.png", // Add preview image later
    files:{
        "AnimatedArrow.html":`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Arrow Draw Animation</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<svg
  class="arrow-svg"
  width="120"
  height="60"
  viewBox="0 0 120 60"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <!-- main arrow path -->
  <path
    d="M10 30 H85 L70 15 M85 30 L70 45"
    class="arrow-path"
  />
</svg>

</body>
</html>
`,
        "AnimatedArrow.css":`body {
  background: black;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* arrow style */
.arrow-path {
  stroke: rgb(166, 22, 22);
  stroke-width: 4;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;

  /* animation trick */
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: drawArrow 1.6s ease-in-out infinite;
}

/* draw animation */
@keyframes drawArrow {
  0% {
    stroke-dashoffset: 200;
    opacity: 1;
  }
  60% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0;
  }
}
`
    }
  },{
    name:"HomeIcon",
    description: "A Animated Home icon use as Animating Icon in your website.",  
    previewImage: "/src/browse-components/HomeIcon/preview.png", // Add preview image later
    files:{
        "HomeIcon.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home-Icon</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="home-hover">
  <svg
    width="70"
    height="70"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- static home (always visible) -->
    <path
      d="M8 30 L32 10 L56 30 V54 H38 V38 H26 V54 H8 Z"
      class="home static"
    />

    <!-- animated home (draw on hover) -->
    <path
      d="M8 30 L32 10 L56 30 V54 H38 V38 H26 V54 H8 Z"
      class="home animated"
    />
  </svg>
</div>

</body>
</html>
`,
        "HomeIcon.css":`body {
  background: #0b1020;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-hover {
  cursor: pointer;
}

/* common home style */
.home {
  fill: none;
  stroke: #5eead4;
  stroke-width: 3.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* static layer */
.static {
  opacity: 0.35;
}

/* animated layer (hidden stroke) */
.animated {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
}

/* hover trigger */
.home-hover:hover .animated {
  animation: drawHome 1.2s ease-out forwards;
}

@keyframes drawHome {
  to {
    stroke-dashoffset: 0;
  }
}

`
    }
  },{
    name:"HoverArrow",
    description: "A Animated Arrow icon use as Animating Icon in your website.",  
    previewImage: "/src/browse-components/HoverArrow/preview.png", // Add preview image later
    files:{
        "HoverArrow.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hover-Arrow-Icon</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="arrow-hover">
  <svg
    width="120"
    height="60"
    viewBox="0 0 120 60"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- static arrow (always visible) -->
    <path
      d="M10 30 H85 L70 15 M85 30 L70 45"
      class="arrow-static"
    />

    <!-- animated arrow (on hover) -->
    <path
      d="M10 30 H85 L70 15 M85 30 L70 45"
      class="arrow-animated"
    />
  </svg>
</div>


</body>
</html>
`,
        "HoverArrow.css":`body {
  background: #0b1020;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow-hover {
  cursor: pointer;
}

/* static arrow always there */
.arrow-static {
  stroke: #5eead4;
  stroke-width: 4;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: 0.35;
}

/* animated layer (hidden line) */
.arrow-animated {
  stroke: #5eead4;
  stroke-width: 4;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;

  stroke-dasharray: 200;
  stroke-dashoffset: 200;
}

/* hover = draw animation over static arrow */
.arrow-hover:hover .arrow-animated {
  animation: drawArrow 1.2s ease-out forwards;
}

@keyframes drawArrow {
  to {
    stroke-dashoffset: 0;
  }
}


`
    }
  },{
    name:"HoverMenuBar",
    description: "A Animated Menubar icon use as Animating Icon in your website.",  
    previewImage: "/src/browse-components/HoverMenuBar/preview.png", // Add preview image later
    files:{
        "HoverMenuBar.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MenuBar-Icon</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="chart-hover">
  <svg
    width="120"
    height="60"
    viewBox="0 0 120 60"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- static bars (always visible) -->
    <line x1="10" y1="15" x2="80" y2="15" class="bar static" />
    <line x1="10" y1="30" x2="100" y2="30" class="bar static" />
    <line x1="10" y1="45" x2="60" y2="45" class="bar static" />

    <!-- animated bars -->
    <line x1="10" y1="15" x2="80" y2="15" class="bar animated" />
    <line x1="10" y1="30" x2="100" y2="30" class="bar animated" />
    <line x1="10" y1="45" x2="60" y2="45" class="bar animated" />
  </svg>
</div>

</body>
</html>
`,
        "HoverMenuBar.css":`body {
  background: #0b1020;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart-hover {
  cursor: pointer;
}

/* common bar style */
.bar {
  stroke: #5eead4;
  stroke-width: 4;
  stroke-linecap: round;
}

/* static layer */
.static {
  opacity: 0.35;
}

/* animated layer (hidden stroke) */
.animated {
  stroke-dasharray: 120;
  stroke-dashoffset: 120;
}

/* hover = draw */
.chart-hover:hover .animated {
  animation: drawBar 0.9s ease-out forwards;
}

/* draw effect */
@keyframes drawBar {
  to {
    stroke-dashoffset: 0;
  }
}

`
    }
  },{
    name:"AnimatedSendArrow",
    description: "A Animated SendArrow icon use as Animating Icon in your website.",  
    previewImage: "/src/browse-components/AnimatedSendArrow/preview.png", // Add preview image later
    files:{
        "AnimatedSendArrow.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SendArrow-Icon</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="send-hover">
  <svg
    width="70"
    height="70"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- static send icon (always visible) -->
    <path
      d="M6 32 L58 6 L42 58 L30 34 L6 32 Z"
      class="send static"
    />

    <!-- animated send icon (draw on hover) -->
    <path
      d="M6 32 L58 6 L42 58 L30 34 L6 32 Z"
      class="send animated"
    />
  </svg>
</div>

</body>
</html>
`,
        "AnimatedSendArrow.css":`body {
  background: #0b1020;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.send-hover {
  cursor: pointer;
}

/* common send icon style */
.send {
  fill: none;
  stroke: #5eead4;
  stroke-width: 3.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* static layer */
.static {
  opacity: 0.35;
}

/* animated layer (hidden stroke) */
.animated {
  stroke-dasharray: 260;
  stroke-dashoffset: 260;
}

/* hover trigger */
.send-hover:hover .animated {
  animation: drawSend 1.1s ease-out forwards;
}

@keyframes drawSend {
  to {
    stroke-dashoffset: 0;
  }
}

`
    }
  },{
    name:"AnimatedCard",
    description: "A Animated Card use your in your page to look different.",  
    previewImage: "/src/browse-components/AnimatedCard/preview.png", // Add preview image later
    files:{
        "AnimatedCard.html":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box">
        <img
            src="https://i.pinimg.com/736x/be/2d/fb/be2dfba67d3dc5b906605f28b1b1d2f9.jpg"
            alt=""
        >
        <h1>SpiderMan</h1>
        <p>Hii iam Peter Parker known as Spiderman.</p>
    </div>
</body>
</html>
`,
        "AnimatedCard.css":`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    height: 100%;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
}



body {
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
}

@property --rotate {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
}

@keyframes borderAnimate {
    from {
        --rotate: 0deg;
    }

    to {
        --rotate: 360deg;
    }
}

.box {
    max-width: 300px;
    padding-inline: 10px;
    padding-bottom: 10px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 15px;
    background:
        linear-gradient(black) padding-box,
        conic-gradient(from var(--rotate), black, rgb(255, 0, 0), black) border-box;
    border: 0px solid rgba(255, 255, 255, 0);
    animation: borderAnimate 3s;
    animation-iteration-count: infinite;
    animation-timing-function:linear;
    animation-play-state: paused;
    text-shadow: 0 0 0px rgb(255, 0, 0);
    color: white;
    transition: all 0.3s linear;
}

.box:hover{
    animation-play-state: running;
    border-width: 5px;
    box-shadow: 0 0 50px rgb(255, 0, 0);
    color: rgb(254, 0, 0);
    text-shadow: 0 0 10px rgb(230, 7, 7);
}

.box img {
    width: 100%;
}
`
    }
  },{
    name:"AnimatedPage",
    description: "A Animated Page use your in your website or portfolio to look different.",  
    previewImage: "/src/browse-components/AnimatedPage/preview.png", // Add preview image later
    files:{
        "AnimatedPage.html":`<!-- you can add any image in the anchor div and it will follow the mouse pointer. -->
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >
    <title>Animate Image</title>
    <link
        rel="stylesheet"
        href="style.css"
    >
</head>
<body>
    <div class="red box">
    </div>
    <div class="blue box"></div>
    <div class="green box"></div>
    <div class="anchor">
    
    </div>
</body>
</html>

`,
        "AnimatedPage.css":`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    height: 100%;
    width: 100%;
    background-color: black;
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    anchor-name: --some-anchor;
}

.box {
    margin-top: 50px;
    height: 100px;
    width: 200px;
    border-radius: 10px;
    /* align-self: flex-start; */
    border: 2px solid white;
}

.box:hover{
    anchor-name: --some-anchor;
}

.red{
    background-color: rgba(234, 234, 234, 0);
}
.blue{
    background-color: rgba(254, 254, 254, 0);
}   
.green{
    background-color: rgba(253, 253, 253, 0);
}


.anchor{
    background: white;
    background-image: url(virat.jpg);
    background-size: cover;
    z-index: 2;
    background-size: cover;
    border-radius: 10px;
    position: absolute;
    top:anchor(top);
    left:anchor(left);
    bottom: anchor(bottom);
    right:anchor(right);
    pointer-events: none;
    position-anchor: --some-anchor;
    transition: all 0.3s linear;
    mix-blend-mode: difference;
}
`
    }
  }
];
