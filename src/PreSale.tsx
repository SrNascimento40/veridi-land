import { useState } from 'react';
import './PreSale.css';

const PreSale = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="pre-venda-container">
      <div className="aviso">
        <h2>🚀 Pré-venda do Veridi</h2>
        <p>
          Ao apoiar com <strong>R$300</strong>, você garante <strong>3 meses de acesso</strong> ao aplicativo quando ele for lançado,
          terá <strong>contato direto com os desenvolvedores</strong> e ainda <strong>ajuda no desenvolvimento</strong> da plataforma.
        </p>
      </div>

      <form className="formulario" onSubmit={handleSubmit}>
        <label>
          Nome completo:
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          E-mail:
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="btn-pagar">Apoiar agora</button>
      </form>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Pagamento</h3>
            <p>Chave Pix: <strong>pix@veridi.com.br</strong></p>
            <p>Valor: <strong>R$300,00</strong></p>
            <p>Após o pagamento, envie o comprovante para <strong>contato@veridi.com.br</strong></p>
            <button onClick={() => setShowModal(false)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreSale;
