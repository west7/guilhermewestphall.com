export function Header() {
    return (
        <nav style={{ width: '44%', justifyContent: 'space-between', display: 'flex', padding: 4, alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            <a style={{ color: 'black', fontSize: 24, padding: 4, fontWeight: 'bold' }}>guilhermewestphall.com</a>
            <div style={{ padding: 4, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <a style={{ margin: 6 }}>search icon</a>
                <a style={{ margin: 6 }}>theme icon</a>
            </div>
        </nav>
    );
}