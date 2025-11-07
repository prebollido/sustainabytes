# Welcome to Sustainabytes Repository!

Kindly check this file to see update log, how to use repo, and how to deploy page. Do let the team know if you have questions!

## List of Files
1. README.md
    - contains relevant repo info
2. sustainabytes_portfolio
    - project web portfolio
3. sustainabytes.ipynb
    - jupyter notebook for anything data science related work


## I. Update Logs
Logs of important updates. \
**-------------------------------------------- UPDATE LOGS --------------------------------------------** 

1. 02/10/25 5:45 pm | Pammy | Initial page deployment 
2. 28/10/25 3:15 am | Pammy | Migrate to React (next.js) and Tailwind CSS
3. 03/11/25 6:06 pm | Pammy | Minor page changes and upload jupyter notebook


_FORMAT: dd/mm/yy hh:mm am/pm | dev | commit message_

## II. How to Use the Repository
1. Put CS 132 project files in the main page of the repository. Project files include but are not limited to: 
    - Data sets (csv, xlsx, xsl)
    - Python notebook
    - Illustrations (png, jpg, svg)
    - Link sheet (for Google Drive files like write-ups, notes, etc.)
2. Put all portfolio/Pilinuts Page related content in **/sustainabytes_portfolio**. _(For instructions how to modify the page, see **Section III. Deploying the Page**.)_
3. Create a branch for your own modifications. Name the branch dev-{your nickname}. Do consult with the team first before pushing to main branch.
4. You may create any dummy files/branches for your own use. Be sure to clean it up after use.
5. Do not forget to include major updates in the update log on **Section I**.

## III. Deploying the Page
The page is mostly front-end stuff only. Current contents are tentative, design direction and content are subject to change.
1. Ensure that you have a clone of the repository on your machine.
2. Use the conventions and syntax for the following framework versions. Do check for yourself what version is used for other stuff needed in the page not mentioned here.
    - npm: 10.9.2
    - node: 22.14.0
    - react: 19.2.0
    - tailwindcss: 4.1.15
3. Go to `/sustainabytes_portfolio`. If npm fails, npm install. (You may need to do this everytime you switch branches)
4. Modify only the `/app`, `/public`, and `utils` folders. You may create new files in these folders for scripts and styles. Include all layout and styles in `globals.css` and `layout.tsx`. 
5. Run page locally first before committing and deploying to github. Use the following command to run the website locally:
    ```
    npm run dev
    ```
    _(Make sure you are in `/sustainabytes_portfolio`)_
6. Sometimes, the page renders well locally but fails when deployed to Github. Check if the page is built properly through the following command:
    ```
    npm run build
    ```

    Debug accordingly.

7. Consult with the team before deploying the page. The team can check current state by going to your branch for the meantime. (I think lol idk github)
8. Deploy the page using the following command:
    ```
    npm run deploy
    ```
    There will be some weird Modified/Add/Unsaved markers in VSCode, but these are usually ignored by `/.gitignore` so no need to commit these "changes". Only commit changes if there are changes in the webpage itself.
9. If you have to modify the `.ts` and `.json` files, do include a quick guide especially if it affects how the page is built and deployed. Ammend the necessary instructions if needed.

## IV. Working on Jupyter Notebook
### Option 1: Using Google Colab
1. This notebook will also be uploaded on [Google Colab](link). Kindly use Colab for any simultaneous programming.
2. Do not test run on Google Colab. In your dev branch, make a copy of the notebook and open it locally on your machine. Do your testing and changes there.
3. Once you have finalized your changes, edit ONLY the part you modified in the Google Colab file.
4. Once we are done with the project, download the notebook and push back into the repository.

### Option 2: Purely Github
1. Like the usual, ensure that the notebook is on your branch. 
2. Run jupyter notebook locally.
3. Push your changes to your branch first. 
4. Once you have finalized your work, and the team has checked it, push the notebook back to the main branch, so that everyone has an updated copy.

##
_**Note:** I made this sort of guide based on my experience deploying the page (it was a bit challenging). I want to make it a bit easier to work on the portfolio since the bulk of our effort should go on the data science part of the project. I may also be wrong on some stuff and may have generalized some concepts/instructions. If, by any chance, you encounter better methods or have implemented complex scripts/styles, do modify some instructions or include it in the guide!_