# Implantory

A full-stack storage application for managing dental office implant supplies with inventory tracking, scanning, and role-based access. Implantory will be a PWA (Progressive Web App), allowing offline use and installation on mobile devices. It will allow dentists and dental assistants to scan QR code from implant boxes with a phone camera, extract product details, and store them in a database. The application will provide CRUD functionality, authentication, email verification, and low-stock notifications. It is being developed for clinics that use Straumann implants (BLX, BLC, BLT). 



## How does Implantory work? 

<p align="center">
  <img src="https://github.com/user-attachments/assets/3a51dd46-94d3-4d0f-8f68-38042f89795d" width="300" style="display: inline; margin-right: 20px;"/>
</p>
<br>
  An example of an implant box with QR code.
  When a product is scanned using its QR code, the system will record the name, diameter, length, REF and LOT codes and the date it was added to the database. This helps clinics track when supplies were received. The boxes look the same for BLX and BLT implants. 
<br><br>
Implantory also keeps track of used implants. In practice, it is often necessary to track down when certain type of implant was used. 
Scanning the same QR code twice, the application will recognize the data and LOT code and adds all that info from 'New implants' to 'Used implants' with the date when it was used. The photo represents a draft version of this application since it's in development process. 
<br><br>
<p align="center">
  <img src="https://github.com/user-attachments/assets/b30eca9d-e6a0-4bcb-8ec7-ae2e6d6fd59e" width="400" />
</p>

<br><br>
Implantory will allow users to o search for products using multiple keywords at once. Example of a draft version:
<br><br>
<p align="center">
  <img src="https://github.com/user-attachments/assets/c8d133a7-c292-4150-9acb-e9b4132cd0f6" width="500"/>
</p>



 

