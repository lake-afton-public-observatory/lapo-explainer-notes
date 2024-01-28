
# Lake Afton Public Observatory Explainer Notes

This project consists of static web pages providing notes of the object and program notes for use during the public program at the Lake Afton Public Observatory's 16-inch [telescope](telescope/telescope.md):

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [Build and Deployment](#build-and-deployment) below for notes on how to deploy the project on a live system.


### Technical Documents 

// TODO: Review these comments for accuracy and any necessary updates...

Use the `Review Block` (_see section below_) at the bottom of each page within these Technical Documents to track Review and remaining tasks for the content of the page.  @mention specific project team members to capture their attention that input is needed to clarify and review the content (example below):

### Hugo Static Web Site Framework

[Documentation](https://gohugo.io/documentation/) and Quick Reference:

[List Draft Pages](https://gohugo.io/commands/hugo_list_drafts/):

> ```cmd
> hugo list drafts [flags]
> ```

### Review Block
---
<span style="color:red;font-weight:bold;">
<i>Use the following HUGO Front Matter tags (located at very top of document) to indicate the status of last reviewed, reviewer and any note related to content:</i>
</span>

```
lastmod: "2022-08-01"
reviewer: "Chris Ketron"
notes: "TODO: This is an example `Review Block` to track content review of pages within the K|Suite Technical Documents. 
        @Chris.Ketron: Please review this document"
---
```

This information will be used to produce the `Review Block` that you see below (automatically produced when Hugo renders static pages):  

|Review Block|   |
|---|---|
|Last reviewed|	2022-08-01|
|Reviewed by| Chris Ketron|
|Notes|TODO: This is an example `Review Block` to track content review of pages within the K|Suite Technical Documents. @Chris.Ketron: Please review this document|


=== === === 

## Build Environment

This project was built using the following environment components:

[Visual Studio Code](https://code.visualstudio.com/)

[Git for Windows](https://git-scm.com/download/win)

[Python 3.10.5](https://www.python.org/downloads/)

## Project Setup

// TODO:  The notes below this line need reviewed and updated to support 
//        these new HUGO Framework based pages...

The following are the steps I used to create the fresh Explainer Notes project, 
and these notes can be used for creating a fresh, brand-new project.
However, if you are just cloning the existing Explainer Notes project from GitHub, then you can skip these steps and go directly to [Clone this Project](#clone-this-project)
 	
### Virtual Environment

Create a virtual environment for the Explainer Notes Project.  
Begin by creating a directory for the Python virtual environment;

Example... from within your lapo-explainer-notes project folder
```
virtualenv venv
```

#### Activate the virtual environment:

You can do this from any folder location, recommend from your local github\lapo-explainer-notes project folder
```
venv\Scripts\activate.bat
```

## Prerequisites

See the pip-dependencies.txt file for the Python package requirements for the LAPO Explainer Notes:

### Install Python Packages

**Short-cut**: to install *ALL* pip dependencies:
The following *must* be done from your local github\lapo-explainer-notes project folder, where the pip-dependencies.txt exists...

```python
pip install -r pip-dependencies.txt
```

### Distance Data

Javascripts have been added to the project, see docs\js\utils.js and docs\init\initialize-json.py, both of these work to create and update ***current*** distance information for each object within the Solar System on pages for each Solar System object. Once the site is up, visit [The Moon > Overview](http://localhost:8000/solar-system/moon/) for example.

Before starting up the web server, initialize the Distance Data file with the following command:
```python
python ../docs/init/initialize_json.py
```

### Start Hugo Server - for local testing
To start the Hugo dev server for testing.
From the lapo-explainer-notes folder, execute the following command

	hugo server -D

You can then open the local site (url displayed in the output from above conmand) for testing:<br/>
	
## Clone this Project

From the GitHub repository: https://github.com/lake-afton-public-observatory/lapo-explainer-notes.git
select Clone and copy the URL to the repo.

Then from your local project folder (I am using c:\git\github), execute the following git command:
```git
git clone https://github.com/lake-afton-public-observatory/lapo-explainer-notes.git
```

## Build and Deployment
Once all editing has been completed, do a final build of the document site for deployment

```
hugo
```

This command will generate the various pages from the markdown files and place them in the "public" sub-directory. This is the folder that contains the generated static website and should be copied to the deployment destination.

You can use the Python Simple HTTP server that comes with Python to start up a local server.
Change directory into the Site folder and execute the following:

```
python -m http.server 8080
```

Then visit the site by visiting the following address in your browser:

[http://127.0.0.1:8080/](http://127.0.0.1:8080/)

## Simplified Deployment

Once the build has completed, a **public** folder will be found in your project repo folder.

This **public** folder now contains the resources for a static website deployment.  Copy the contents to a destination server and execute the startExplainerNotes.bat for the target browser to host the notes locally, e.g., ... the observatory telescope computer.

## Versioning
For the sake of tracking version history, the version numbering will follow a year, month, date numbering sequence, following by a sequence id to account for multiple versions within a single date, in the following format:

	yyyy.MM.dd.#
	e.g.,...  2017.05.02.0

Use this versioning strategy when applying label to the source.

## Contributing
Please follow these simple rules when contributing additional content or changes to the notes:

1. Add a note referencing the source of the material that is being added or changed.

1. Please follow the same formatting, and yes, although a bit tedious, cookie crumb heading and footing references.

## Authors
**Chris Ketron** - Initial compilation of LAPO source material and additional research and validation into these MarkDown notes pages.

## Acknowledgments
Thanks to former staff of the Lake Afton Public Observatory while under the pervue of
the Wichita State University Physics Dept, for the original explainer and program notes source
material used for the creation of these Explainer Notes.

Thank you to the *ALL-Volunteer* staff of the Lake Afton Public Observatory, for the contributions and suggestions in improving these notes.


## Testing Locally

- Download the latest zipped Hugo executable from Hugo [Release](https://github.com/gohugoio/hugo/releases).
- Extract the zip into your C drive for eg. `C:\hugo`
- Add the `hugo.exe` executable to your PATH.
- Open a new cmd prompt window and you should now be able to run `hugo version` command. If you get "hugo command not found" , please make sure you have configured the PATH correctly.
- In the command prompt, navigate to the root of the folder where you have cloned this repo.
- Once you are inside technical-docs folder, run `hugo server -D` and you should see the below output.

```

C:\Users\{user-id}\technical-docs>hugo server -D

Start building sites …
hugo v0.88.1-5BC54738 windows/amd64 BuildDate=2021-09-04T09:39:19Z VendorInfo=gohugoio

                   | EN
-------------------+------
  Pages            | 199
  Paginator pages  |   0
  Non-page files   |  16
  Static files     |   3
  Processed images |   0
  Aliases          |  17
  Sitemaps         |   1
  Cleaned          |   0

Built in 743 ms
Watching for changes in C:\Users\{user-id}\technical-docs\{archetypes,content,themes}
Watching for config changes in C:\Users\{user-id}\technical-docs\config\_default, C:\Users\{user-id}\technical-docs\config\development
Environment: "development"
Serving pages from memory
Running in Fast Render Mode. For full rebuilds on change: hugo server --disableFastRender
Web Server is available at http://localhost:1313/technicaldocs/ (bind address 127.0.0.1)
Press Ctrl+C to stop

```

- Open the browser and navigate to the localhost url which is generated in above logs and you should be able to see the site load.
- Press `ctrl+c` to stop the local dev server.
