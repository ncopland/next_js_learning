export default function Layout({ children }) { /* Defines and exports a Layout component that has children as properties (mecanism for passing data from a parent comonent to a child component)*/
    return ( /* Start of the return statement to render the component */
      <div> {/* Top-level div that wraps the layout */}
        {/* Header, navigation, etc. */}
        <main>{children}</main> {/* Main content area that displays the children components passed to Layout */}
        {/* Footer */}
      </div> /* End of the top-level div */
    ); /* End of the return statement */
} /* End of the Layout component */