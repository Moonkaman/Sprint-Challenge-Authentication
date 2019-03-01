1. What is the purpose of using sessions?

- Sessions are a way of letting us not have to re authorize every time we hit an endpoint on the server. In other
  words it's a way for us stay logged in for a set amount of time and the browser with trust that we are authenticated.

2. What does bcrypt do to help us store passwords in a secure manner.

- Bcrypt hashes strings or passwords if that's what this strings are which is a way to encrypt the passwords and
  store them in a safe manner for anyone who may get access to the data somehow. I'm not really sure exactly how hashing works under the hood but It basically turns the password into a not human readable string by running the hashing algorithm many times.

3. What does bcrypt do to slow down attackers?

- Bcrypt does "rounds" of hashing or in other words it rehashes the same password millions of times which adds
  time to the request because it takes a little bit of time for the computer to perform all of those hashes.

4. What are the three parts of the JSON Web Token?

- The three parts of a JSON web token are the header, the payload and the signature.
