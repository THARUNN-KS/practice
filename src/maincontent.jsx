function Maincontent(){
    return(
        <>
            <p>Why React Component Naming Matters:</p>
            <ul>
                <li><strong>Visual Clarity:</strong> immediately tells you it's a custom component, while &lt;header /&gt; looks like HTML</li>
                <li><strong>Team Standards:</strong> Other developers expect React components to use PascalCase</li>
                <li><strong>Tooling:</strong> Some development tools and linters expect this convention</li>
                <li><strong>JSX Parsing:</strong> React uses the casing to distinguish between HTML elements and custom components</li>
            </ul>
            
            <p>Summary:</p>
            <ul>
                <li><strong>Technically:</strong> You can name functions anything (following JS rules)</li>
                <li><strong>Practically:</strong> For React components, use PascalCase (Header, UserProfile)</li>
                <li><strong>Regular functions:</strong> Common conventions are camelCase (calculateTotal, handleClick)</li>
            </ul>
            
            <p>Your h function works fine technically, but Header would be clearer and follow React conventions!</p>
        </>
    )
}

export default Maincontent;