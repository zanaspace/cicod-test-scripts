Login (with correct details)	Login	
	Click on Login	Displays Login page	Login page displayed at https://cicodsaasstaging.com/login?tenant=cicodecm
	Enter Your Domain	Domain name field should display and accept entry	Domain name field displays and accepts entry "cicodecm"
	Enter Email	Email field should be editable and validate format	Email field is editable and validates format
	Enter Password	Password field should be enabled, masked, and toggleable	Password field is enabled, masked, and toggleable
	Click Login	opens the Home Page of the MDA	Login request submitted and authenticated successfully
	End Test	End Test	Test session completed successfully

Login (with wrong Domain)	Login	
	Click on Login	Displays Login page	Login page displayed successfully
	Enter Your Domain	Display Domain name	Display Domain name and accepts entry "wrongdomain99xyz"
	Enter Email	Display Email	Display Email and accepts entry "raissa.boyomo@crowninteractive.com"
	Enter Password	Display and hide Password	Display and hide Password in masked format
	Click Login	Display 'Invalid Email or Password'	System rejects access and displays toast 'Invalid Email or Password'
	End Test	End Test	Test session ended successfully

Login (with wrong Email)	Login	
	Click on Login	Displays Login page	Displays Login page successfully
	Enter Your Domain	Display Domain name	Display Domain name and accepts entry "cicodecm"
	Enter Email	Display Email	Display Email and accepts entry "nonexistent.user999@crowninteractive.com"
	Enter Password	Display and hide Password	Display and hide Password in masked format
	Click Login	Display 'Invalid Email or Password'	System rejects access and displays toast 'Invalid Email or Password'
	End Test	End Test	Test session ended successfully

Login (with wrong password)	Login	
	Click on Login	Displays Login page	Displays Login page successfully
	Enter Your Domain	Display Domain name	Display Domain name and accepts entry "cicodecm"
	Enter Email	Display Email	Display Email and accepts entry "raissa.boyomo@crowninteractive.com"
	Enter Password	Display and hide Password	Display and hide Password in masked format
	Click Login	Display 'Invalid Email or Password'	System rejects access and displays toast 'Invalid Email or Password'
	End Test	End Test	Test session ended successfully

Show Password	Login	
	Click on Login	Displays Login page	Displays Login page successfully
	Enter Your Domain	Display Domain name	Display Domain name and accepts entry "cicodecm"
	Enter Email	Display Email	Display Email and accepts entry "raissa.boyomo@crowninteractive.com"
	Enter Password	Display and hide Password	Display and hide Password in masked format
	Show Password/hide Password	Password is hidden/Dispalyed to the user	Password revealed on click (type="text") and hidden on toggle (type="password")
	End Test	End Test	Test session ended successfully
