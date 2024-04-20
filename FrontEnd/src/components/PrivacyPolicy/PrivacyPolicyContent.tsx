import React from "react";

const PrivacyPolicyContent: React.FC = () => {
  return (
    <>
      <div className="main-content ptb-80">
        <div className="container">
          <h3>Chatti Se Mandi Tak - Privacy Policy</h3>
          <p>
            Effective date: 10/04/2024<br/>
            This Privacy Policy describes how Chatti Se Mandi Tak ("we", "us", or "our") collects, uses, and discloses your information when you use our mobile application (the "App").
          </p>
          
          <h4>Information We Collect</h4>
          <p>We may collect the following information when you use the App:</p>
          <ul>
            <li><strong>Required Information:</strong></li>
            <li>Mobile Number: We collect your mobile number to create your account and enable certain features within the App.</li>
            <li><strong>Optional Information:</strong></li>
            <li>Name: You can choose to provide your name for better profile identification.</li>
            <li>User Image: You can choose to upload a user image for your profile.</li>
            <li>Address: You can optionally provide your address for specific features within the App, such as delivery services.</li>
          </ul>

          <h4>How We Use Your Information</h4>
          <p>
            We may use the information we collect for the following purposes:<br/>
            - To create and manage your account<br/>
            - To connect you with buyers and sellers of Maize<br/>
            - To personalize your experience within the App, using your name and user image<br/>
            - To provide delivery services, which require your address<br/>
            - To send you important information about the App, such as updates and service announcements<br/>
            - To comply with legal and regulatory requirements
          </p>

          <h4>Data Retention</h4>
          <p>
            We will retain your information for as long as necessary to fulfill the purposes described in this Privacy Policy. We will also retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
          </p>

          <h4>Your Choices</h4>
          <p>
            You have choices regarding your information:<br/>
            - You can access and update your information within the App settings.<br/>
            - You can withdraw your consent for the collection of your location information by disabling location services in your device settings.<br/>
            - You can contact us to request the deletion of your information.<br/>
            - You can permanently delete your account and all data within the App and on our website at https://www.chattisemanditak.com/deleteAccount/.
          </p>

          <h4>Security</h4>
          <p>
            We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or electronic storage is ever completely secure.
          </p>

          <h4>Children's Privacy</h4>
          <p>
            Our App is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information from our records.
          </p>

          {/* End of Privacy Policy */}

        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyContent;
