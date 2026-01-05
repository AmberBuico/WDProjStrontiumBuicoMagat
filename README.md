# **WDProjStrontiumBuicoMagat — Project Proposal**

**Project members:** Amber Daphne A. Buico & Zach Joseph S. Magat     
**Section:** Grade 9 – Strontium <3

## Q3 Project Update

### Final Title
> **Azra The 67th Explorer**

## Features, Details, and Our Definition of Done

### General
- The website works on both **mobile and laptop** screens.
- Users can navigate through all webpages without leaving the website.
- Most interactive elements respond to hover (highlight, pop-up, or animation).
- JavaScript is used for animations, navigation, and user interaction.
- The overall tone of the website is **welcoming, playful, and calm**, not advertising.

### User Input & Local Storage
- Upon opening the website for the first time, a **friendly pop-up** appears asking the user what type of tambayan they usually prefer:
  - Tambayan with A/C
  - Tambayan with Nature
  - Anywhere / Surprise me
- This input is **optional** and can be skipped.
- The selected preference is saved using **localStorage**.
- The data is used only to:
  - Highlight related tambayan groups on the homepage
  - Change Azra’s dialogue to better match the user’s preference
- No personal or sensitive data is collected.
- All stored data stays on the user’s device and can be cleared by the user at any time.

### Homepage
- The homepage contains navigation elements (boxes below Azra, the corgi icon) that direct users to different tambayan places.
- Upon opening the website, the homepage displays:
  - The corgi character named **Azra**, with a visible label
  - A short tagline below Azra
- Hovering over the flower changes the homepage background color.
- Hovering over Azra causes the character to wiggle and slightly zoom in.
- The homepage layout is highly inspired by miffy's website.

### Sidebar Navigation
- The sidebar contains:
  - A link to the **About Us** page and an option to return to the homepage.
  - Links to grouped tambayan directories
  - The creator's personal social media links
- The sidebar is accessed by clicking the **dog house icon** on the top-right corner.
- It slides out from the side and does not redirect to a new webpage.

### Tambayan Places
- Each tambayan has its **own webpage**.
- Tambayan pages can be accessed from:
  - The homepage
  - Grouped directory pages
- Each tambayan page includes:
  - A photo of the place
  - A short description
  - One fun fact
  - More fun related things to that specific tambayan.
- Azra appears on each tambayan page and provides short dialogue related to the location.
- Background elements will change when Azra is clicked.

### Definition of Done
The website is considered **done** when:
- All main pages are complete and navigable.
- Tambayan directories and individual tambayan pages are fully implemented.
- JavaScript features (animations, sidebar, pop-ups, localStorage) are working properly.
- The website is responsive and visually consistent.
- All sources are cited and credits are included.



--------------------------------------------------------------------------------------------

## [1] Working Website Title
**Azra The 67th Explorer** 
> **Explanation:** Our website is all about exploring the different tambayan spots around Pisay, so we thought of connecting it to Dora the Explorer! We combined our names—Zach + Amber + Dora—and came up with Azra. As for the “67th,” it’s kind of an inside joke and a time marker. We’re making this project in 2025, when “67” became the word (or rather, numbers) of the year. So we decided to include it as a fun reminder of this moment in time—proof that people were once obsessed with two random numbers!

## [2] Second Title / Tagline 
**Make sama with Azra in exploring Pisay’s most iconic hangout places!**

## [3] Logo Tentative Design Idea
- A **cartoon corgi in tsum-tsum style**.  
- The corgi could hold a tiny map or a leaf.  
- Keep the lines **thick and minimal** (Something Miffy-inspired aesthetic).  
- **Favicon:** simplified corgi face (just ears + eyes + nose) inside a 64×64 px square.

## [4] Website Description
**Azra The 67th Explorer** is a friendly, minimal guide to the best tambayan places around Pisay Main Campus.  We highlight outdoor hangout spots, short descriptions, photos, and tips that will be perfect for freshies, laterals, visitors, or anyone who wants a peaceful place to relax while in the campus.

Our website aims to help users appreciate our campus spaces and nature by showcasing each tambayan with **simple illustrations, quick facts, and a map**.  It’s easy to use mobile-friendly, and full of **cute animations** to match the cheerful vibe.

## [5] Website Outline

### 1. **Azra's home**
- Home page with title, tagline, menu bar, favicon and corgi character.  
- Overview section introducing the three main tambayan groups: Tambayan with A/C, Tambayan with Nature, and Others (as shown in our layout sketch).
- Clean layout inspired by Miffy’s minimalist design, but adjusted to match Pisay’s aesthetic.

### 2. **Tambayan Maps**
- Directory
- Acts as the main feature of the website where users can explore the tambayan categories
- Each category has a box with images.
- Clicking on a box opens a detailed view of that tambayan with photos, descriptions, and short fun facts.

### 3. **Lakbay with Azra**
- Interactive feature showing the map of Pisay.
- When users click on a tambayan (e.g., Kala Lane), a pop-up map appears showing directions from Gate 1 and markers leading to the chosen tambayan.

### 4. **About Azra The 67th Explorer”**
- About the creators (Amber & Zach) and our inspiration for making this directory website.
- Includes a short story of how we combined our names and why we made this project.
- Layout may feature a collage or scrapbook-like design to keep it personal and warm.

### 5. **Behind the making**
- Photos and short documentation of how we built the website (coding, testing, taking pictures around Pisay, etc.). 
- We might also include our timeline, early wireframes, and progress shots.

### 6. **References & Credits — “Pasasalamat”**
- Citations for all media, icons, and references used. 
- Credits to people who helped, including teachers, classmates, and resource sites.
- Footer will appear here too, containing copyright info and small social media icons.

> *The names of the pages are Taglish to match our theme and make it feel more personal.*

## [7] How JavaScript Will Be Used

### **Main JavaScript Features**
- **Homepage animations** – fade-in and slide effects for logo and illustrations using `IntersectionObserver`.  
- **Interactive map** – clicking pins opens info modals about tambayans.  
- **Filters and search** – real-time filtering of tambayans using `input` events and `Array.filter()`.  
- **Favorites system** – heart button saves favorites using `localStorage`.  
- **Modal/lightbox** – show bigger image and info when a tambayan card is clicked.  
- **Click tracking (not sure...)** – count number of views on each tambayan to sort by “most-loved.”

### **Some features from the directories**
- JavaScript will be used in the 'Lakbay with Azra' directoryhere for the interactive elements, such as highlighting paths and displaying pop-up info.  

### **JS File Plan**
- `/js/home.js`  
- `/js/explore.js`  
- `/js/spotlight.js`  
- `/js/app.js`

> *References for this part:*
>- https://www.geeksforgeeks.org/javascript/introduction-to-intersection-observer/
>- https://www.w3schools.com/jsref/jsref_filter.asp
>- https://www.w3schools.com/jsref/prop_win_localstorage.asp

## [7] Link to Wireframe 
> https://www.canva.com/design/DAG3n4AIU3M/AfDD1MxNDtfPy-LRmDnf1Q/edit?utm_content=DAG3n4AIU3M&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

Warning ⚠️: Sir the design is like super duper... not okay! But we'll fix it po, trust!

## [8] Favicon
> <img src="azra.png" alt="site icon" class="logo">








