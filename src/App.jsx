import { useEffect, useState } from 'react';
import Papa from 'papaparse';

export default function App() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedAthlete, setSelectedAthlete] = useState(null);

  useEffect(() => {
    Papa.parse('/ranking.csv', {
      download: true,
      header: true,
      complete: (result) => {
        setData(result.data);
        const uniqueCategories = [...new Set(result.data.map((row) => row.Categoria))];
        setCategories(uniqueCategories);
        setSelectedCategory(uniqueCategories[0]);
      },
    });
  }, []);

  const filteredData = data
    .filter((row) => row.Categoria === selectedCategory)
    .sort((a, b) => parseInt(a.Posicao) - parseInt(b.Posicao));

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #e0f2fe, #dcfce7)', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#1e3a8a', fontWeight: 'bold', fontSize: '24px', marginBottom: '20px' }}>
        Ranking 2025 - Liga Oeste Paulista de Tênis de Mesa
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '8px 12px',
              borderRadius: '8px',
              border: cat === selectedCategory ? '2px solid #1e3a8a' : '1px solid #94a3b8',
              backgroundColor: cat === selectedCategory ? '#1e3a8a' : 'white',
              color: cat === selectedCategory ? 'white' : '#1e3a8a',
              cursor: 'pointer',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px' }}>
        {filteredData.map((athlete) => (
          <div
            key={athlete.Atleta}
            style={{
              backgroundColor: 'white',
              padding: '16px',
              borderRadius: '12px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              cursor: 'pointer',
            }}
            onClick={() => setSelectedAthlete(athlete)}
          >
            <p style={{ fontWeight: 'bold', color: '#1e40af' }}>{athlete.Atleta}</p>
            <p>Posição: {athlete.Posicao}</p>
            <p>Pontos: {athlete.Total}</p>
          </div>
        ))}
      </div>

      {selectedAthlete && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={() => setSelectedAthlete(null)}
        >
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', maxWidth: '400px' }}>
            <h2 style={{ marginBottom: '10px', color: '#065f46' }}>{selectedAthlete.Atleta}</h2>
            {Object.keys(selectedAthlete)
              .filter((key) => key.includes('Etapa'))
              .map((etapa) => (
                <p key={etapa}>
                  <strong>{etapa}:</strong> {selectedAthlete[etapa]}
                </p>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
