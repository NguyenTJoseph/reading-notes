# React 3
## NextJS
- Create a Next.js app
- Run the development server
- Open pages/index.js with your text editor.
- Pages are associated with a route based on their file name.
- import Link from 'next/link'

## React Context
- React context is great when you are passing data that can be used in any component in your application.
- Theme data (like dark or light mode)
- User data (the currently authenticated user)
- Location-specific data (like user language or locale)
- Data should be placed on React context that does not need to be updated often.
1. Create context using the createContext method.
2. Take your created context and wrap the context provider around your component tree.
3. Put any value you like on your context provider using the value prop.
4. Read that value within any component by using the context consumer.
- React.useContext()