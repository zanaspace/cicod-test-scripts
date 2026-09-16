const fs = require('fs');
const path = require('path');

// 1. Generate test/MyDocumentTest.md
const testScriptContent = `My Document	FILE & FOLDER	Click on My documents on the side menu	Should display the document page	Document's page is displayed
	Click on new file		A drop-down list should be displayed as an Upload file, upload folder and create a folder 	A drop-down list is displayed as an Upload file, upload folder, and create a folder 
	Click on Upload file		Should open the file folder and the user should be able to select the File to upload successfully	opens the file folder and the user should be able to select the File to upload successfully
	Click on upload folder		Should open the folder and the user should be able to select the folder to upload successfully	opens the folder and the user should be able to select the folder to upload successfully
	Create folder		Should displays a create folder modal	 displays a create folder modal
	Enter a folder name		The folder name should be accepted	The folder name is accepted
	Click on create button		The folder should be created in my document page successfully	The folder is created in my document page successfully
	Click on cancel button		Should close the create folder modal page	 close the create folder modal page
	View My report			
	Click the menu button on the file in document created		A drop-down list should be displayed as PIN folder, open folder, get folder link, share folder, star folder, Rename folder, view details, download folder, attach to the ticket, Archive a file and delete file	A drop-down list should be displayed as open folder,  share folder, star folder, is displayed. 
	Click on open folder		Folder should be opened successfully	Folder is opened successfully
	View Audit trail		Displays a drop-down as Preview file, open file, print file, download	Displays a drop-down as Preview file, open file, print file, download
	Click on preview file button		Should display the file	Should display file 
	Click on open file		Should display the file	Shoul display file
	Click on print file in the drop-down		Should display the print page and the user should be able to print the file	Not implemented
	Click on the download button in the drop-down		The file should be downloaded	Not implemented
	Click on tools			
	Click on add signature		Should display a drop-down with list as New signature and Upload signature	Not implemented
	Click on new signature		Should display the create new signature page	Not implemented
	Click on save button		Should save the signature	Not implemented
	Click on cancelled button		The process should be cancelled	Not implemented
	Click on Add field		Should display extra field	Not implemented
	Drag field into document		Should enable the field to be dragged into the document	Not implemented
	Add signee (Optional)		Not implemented	
	Click on request button		Should display signer notification modal	Not implemented
	Enter content		Should accept content engtered	Not implemented
	Click on grant access button		Request access should be granted successfully	Not implemented
	Click on cancel button		Should cancel the create signee request process	Not implemented
	Check authentication is required		N/A	Not implemented
	Check the send a copy of all signed documents to all user		N/A	Not implemented
	Click the menu button on the folder in report created		A user shall be able to select a folder and view the files in the folder.	Not implemented
	SIGNATURE STAMP		Users should be directed to view the created signed stamps	Not implemented
	Click on the stamp more option button		Should display drop-down options as preview file, open file, print file, and download file	Not implemented
	Click on preview file button		Should display the file	Not implemented
	Click on open file		Should open the file	Not implemented
	Click on the print file		Should print the file 	Not implemented
	Click on the download file		Not implemented	
	Click on upload signature		The user should be able to upload signature	Not implemented
	Edit Uploaded Signature		Not implemented	
	Click on edit signature button		Not implemented	
	View My File			
	Click the folder created		The folder should be opened and the file should be displayed	
	Click the menu button on the folder in file created		A user shall be able to select a folder and view the files in the folder and a drop-down as (Pin file, Open file, getfolder link, share file, star file, rename file, view details, download folder, Attach to ticket, Archive file, delete file)	
	click on pin file		The file should be pinned successfully	
	View Audit trail: Click on the three-dot button on the file		Displays a drop-down as Preview file, open file, print file, download	
	Click on preview file button		Should display the file	File is displayed
	Click on open file		Should display the file	File is open
	Click on print file in the drop-down		Should display the print page and the user should be able to print the file	Not implemented
	Click on the download button in the drop-down		The file should be downloaded	Should download the file
	Click on get file link		Should display a file link	Should display the file link
	Click on share file		Should open sharing link to share the file	An error message page is displayed
	Click on star folder		Folder should be starred succeessfully	The file is starred but it is never stored in the star page
	Click on rename folder		A renaming field popup should be displayed 	Not implemented
	Click on save button		The folder should be renamed and saved successfully	Not implemented
	Click on cancel button		The process should be cancelled	Not implemented
	Click on view details		Displays the folder details	
	Click on download file		The file should be download	
	Click on Attach to tcket		Should display a modal page having a queue, queue type and ticket ID	Not implemented
	Click and select queue from the drop down		Should be able to select queue(s) and display on the queue field 	Not implemented
	Click and select queue type from the drop-down		Should be able to select queue-type(s) and display in the queue-type field 	Not implemented
	Click and select ticket id from the drop-down		Should be able to select Ticket-id(s) and display in the Ticket-id field 	Not implemented
	Search and filter through the queue, queue-type and ticket id		Should be able to filter through the queue, queue-type and ticket id	Not implemented
	ARCHIVE FILE			
	Click on archive file button 		Should display a modal page with Google Drive and amazone 53	Not implemented
	Delete file			
	Click on delete file		Should display a confirmation prompt for the user to delete the file	Not implemented
	click on delete button		Should delete the file totally	Not implemented
	Click on cancel button		Should terminate the process	Not implemented
	View Access			
	Click on view access		Should display list of users and their access rights	An application error page is displayed
	Check editor box 		Editor box should be checked successfully	An application error page is displayed
	Check view only box		The view only box should be checked successfully	An application error page is displayed
	Click on done button		Access rights should be created successfully	An application error page is displayed
	Click on cancel button		The process should be cancelled	An application error page is displayed
	View who has access			
	Verify who has access		Should display users with access	display users with access
	Version History			
	Click on the version history on the bottom right of the side bar		Should display the file version according to order of creation	Not clickable
	Click on the action button 		Should display a drop-down with preview file, open a file, Print a file, download, keep forever, and delete file.	Not tested
	Click on open file		Should display the file	Not tested
	Click on print file in the drop-down		Should display the print page and the user should be able to print the file	Not tested
	Click on the download button in the drop-down		The file should be downloaded	Not tested
	Click on preview file		Should display the file	Not tested
	End Test		Test session ended successfully	End Test
`;

fs.writeFileSync('c:\\Users\\CI-STAFF\\Documents\\CICOD\\test\\MyDocumentTest.md', testScriptContent);
console.log('Saved c:\\Users\\CI-STAFF\\Documents\\CICOD\\test\\MyDocumentTest.md');

