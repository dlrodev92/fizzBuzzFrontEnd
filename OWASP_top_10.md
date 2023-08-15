# Security Considerations: Adherence to OWASP Top 10

## Security Measures

While this is a straightforward application, security has been taken into consideration, aligning with the OWASP Top 10:

1. **1. Injection:** SQL injection attacks are a significant threat. To mitigate this, the application uses a mock ORM function in the backend to avoid direct SQL queries and thus prevent SQL injection.
(Bear in mind I did not use a sql db for this project, I used a json File instead to simulate a db, since there is no need of sql code in the backend is like mocking an ORM)

2. **2. Broken Authentication:** User authentication and authorization are implemented in both the backend and frontend. User passwords are securely hashed before storage, preventing unauthorized access.

3. **3. Sensitive Data Exposure:** This application doesn't handle sensitive user data. However, password hashing and access control have been applied to ensure that even if a breach occurs, sensitive data remains protected.

4. **4. XML External Entities (XXE):** Since XML processing isn't a part of this application, the risk of XXE attacks is eliminated. (In case this would be needed we could have Disable External Entity Processing among other things)

5. **5. Broken Access Control:** Authorization is enforced on the backend API, ensuring that only authorized users can access the FizzBuzz endpoint.

6. **6. Security Misconfiguration:** Basic security configurations have been considered, but since the application is simple, no advanced security configurations are required.

7. **7. Cross-Site Scripting (XSS):** The application doesn't involve user-generated content or dynamic rendering, which significantly reduces the risk of XSS attacks.

8. **8. Insecure Deserialization:** Since there's no user input deserialization, the risk of insecure deserialization is not applicable to this application.

9. **9. Using Components with Known Vulnerabilities:** The application uses Tailwind CSS for styling. While this is a third-party component, if we would move forward scaling this app we should keep tailwind updated to prevent known vulnerabilities.

10. **10. Insufficient Logging & Monitoring:** While this application doesn't have extensive logging and monitoring, it's recommended to implement logging and monitoring for a more comprehensive security posture.

## Conclusion

I tried to adhere as much as possible to these 10 principles in my project. I learned quite a lot about security measures, and I will keep this framework in mind every time I have to work on new projects.