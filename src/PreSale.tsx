import { useState } from 'react';
import './PreSale.css';

const PreSale = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    city: '',
    state: '',
    whatsapp: '',
  });

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
          Estamos iniciando a fase de pré-venda! Preencha o formulário abaixo e entraremos em contato para efetuar a pré-venda
          e garantir sua participação antecipada no lançamento da plataforma.
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

        <label>
          Empresa:
          <input
            type="text"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
          />
        </label>

        <label>
          Cidade:
          <input
            type="text"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
          />
        </label>

        <label>
          Estado:
          <input
            type="text"
            name="state"
            required
            value={formData.state}
            onChange={handleChange}
          />
        </label>

        <label>
          WhatsApp:
          <input
            type="tel"
            name="whatsapp"
            required
            value={formData.whatsapp}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="btn-pagar">Enviar</button>
      </form>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Formulário enviado</h3>
            <p>Obrigado pelo interesse! Em breve entraremos em contato para finalizar sua participação na pré-venda.</p>
            <button onClick={() => setShowModal(false)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreSale;
