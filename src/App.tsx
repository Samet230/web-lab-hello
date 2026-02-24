function App() {
    return (
        <div style={{
            padding: '40px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            maxWidth: '600px',
            margin: '40px auto',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            backgroundColor: '#ffffff'
        }}>
            <h1 style={{ color: '#2563eb', marginBottom: '10px' }}>Web Tasarımı ve Programlama</h1>
            <h2 style={{ color: '#64748b', fontSize: '1.2rem', marginBottom: '20px' }}>LAB - 1</h2>
            <div style={{ borderTop: '2px solid #f1f5f9', paddingTop: '20px' }}>
                <p><strong>Ad Soyad:</strong> Samet Şahin</p>
                <p><strong>Öğrenci No:</strong> 230541096</p>
                <p><strong>Bölüm:</strong> Bilgisayar Programcılığı</p>
            </div>
        </div>
    );
}

export default App;
