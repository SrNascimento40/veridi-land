import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const navToggle = document.querySelector('.nav-toggle') as HTMLButtonElement;
    const navUl = document.querySelector('nav ul') as HTMLUListElement;

    const handleToggle = () => navUl.classList.toggle('open');
    const handleResize = () => { if (window.innerWidth > 700) navUl.classList.remove('open'); };
    const handleCloseMenu = () => { if (window.innerWidth <= 700) navUl.classList.remove('open'); };

    navToggle?.addEventListener('click', handleToggle);
    window.addEventListener('resize', handleResize);
    document.querySelectorAll('nav a').forEach(el => el.addEventListener('click', handleCloseMenu));

    return () => {
      navToggle?.removeEventListener('click', handleToggle);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToCTA = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>

<header>
<div className="container navbar">
<div className="logo-wrap">
<span className="logo">Veridi</span>
<span className="by-zfx" data-tooltip="Powered by ZFX Studios">by ZFX Studios</span>
</div>
<nav>
<ul>
<li><a href="#features">Funcionalidades</a></li>
<li><a href="#plans">Planos</a></li>
<li><a href="#security">Segurança</a></li>
<li><a href="#testimonials">Depoimentos</a></li>
<li><a href="#contact">Contato</a></li>
</ul>
</nav>
<button className="btn">Solicitar Demonstração</button>
<button aria-label="Menu" className="nav-toggle">☰</button>
</div>
</header>
<main>
{/* <!-- HERO SECTION --> */}
<section className="container hero">
<div className="hero-content">
<h1 className="hero-title">
          Gestão Jurídica Inteligente,<br/>
          Segura e Centralizada
        </h1>
<p className="hero-subtitle">
          O <strong>Veridi</strong> revoluciona a relação entre escritórios de advocacia e seus clientes, unindo tecnologia de ponta, segurança avançada e uma comunicação personalizada, exclusiva e livre de riscos.
        </p>
<div className="hero-cta">
<button className="btn" onClick={scrollToCTA}>Conheça o Veridi</button>
<a href="#features">Saiba mais ↓</a>
</div>
</div>
<div className="hero-image">
<img alt="Dashboard Veridi" src="/assets/main-image.png"/>
</div>
</section>
{/* <!-- FEATURES SECTION --> */}
<section className="container features-section" id="features">
<div className="feature">
<span className="feature-icon">🔒</span>
<div className="feature-title">Segurança em Primeiro Lugar</div>
<div className="feature-desc">
          Comunicação direta, criptografada e sem intermediários. Bloqueie tentativas de fraude e mantenha clientes protegidos de golpes comuns no WhatsApp.
        </div>
</div>
<div className="feature">
<span className="feature-icon">📁</span>
<div className="feature-title">Centralização de Informações</div>
<div className="feature-desc">
          Armazene, organize e compartilhe todos os processos, audiências, documentos e faturas em um só lugar, acessível para escritório e cliente.
        </div>
</div>
<div className="feature">
<span className="feature-icon">🔔</span>
<div className="feature-title">Notificações Inteligentes</div>
<div className="feature-desc">
          Notifique seus clientes sobre atualizações, audiências, compromissos e novidades — de modo geral ou individual — sem perder o controle.
        </div>
</div>
<div className="feature">
<span className="feature-icon">💬</span>
<div className="feature-title">Comunicação Privativa</div>
<div className="feature-desc">
          Um canal exclusivo para cada cliente, com histórico de mensagens e documentos, garantindo privacidade e transparência total.
        </div>
</div>
<div className="feature">
<span className="feature-icon">⚡</span>
<div className="feature-title">Design Moderno &amp; Simples</div>
<div className="feature-desc">
          Navegação fácil para todas as idades. Interface intuitiva e responsiva, pensada para produtividade — sem complicações.
        </div>
</div>
</section>
{/* <!-- PLANOS --> */}
<section className="container plans-section" id="plans">
<div className="plans-title">Planos e Preços</div>
<div className="plans-desc">Escolha o plano ideal para o seu escritório. Sem burocracia, sem surpresas.</div>
<div className="plans-list">
{/* <!-- ESSENCIAL --> */}
<div className="plan">
<div className="plan-title">Essencial</div>
<div className="plan-price">R$49<span style={{ fontSize: '1rem', fontWeight: 400 }}>/mês</span></div>
<div className="plan-desc">Ideal para pequenos escritórios ou advogados autônomos.</div>
<ul className="plan-features">
<li>Gestão de até 20 clientes</li>
<li>Centralização de processos e documentos</li>
<li>Envio de notificações ilimitadas</li>
<li>Suporte básico por e-mail</li>
</ul>
<button className="plan-btn">Assinar Essencial</button>
</div>
{/* <!-- PROFISSIONAL --> */}
<div className="plan best">
<div className="plan-badge">MAIS POPULAR</div>
<div className="plan-title">Profissional</div>
<div className="plan-price">R$99<span style={{ fontSize: '1rem', fontWeight: 400 }}>/mês</span></div>
<div className="plan-desc">Para equipes e escritórios em crescimento que buscam produtividade e segurança.</div>
<ul className="plan-features">
<li>Gestão de até 100 clientes</li>
<li>Todos recursos do Essencial</li>
<li>Suporte prioritário</li>
<li>Marca própria do escritório</li>
<li>Auditoria e registro de acessos</li>
</ul>
<button className="plan-btn">Assinar Profissional</button>
</div>
{/* <!-- CORPORATIVO --> */}
<div className="plan">
<div className="plan-title">Corporativo</div>
<div className="plan-price">Sob consulta</div>
<div className="plan-desc">Soluções personalizadas para grandes escritórios e demandas especiais.</div>
<ul className="plan-features">
<li>Clientes ilimitados</li>
<li>Implantação e treinamento personalizado</li>
<li>Integrações avançadas</li>
<li>Gerente de conta dedicado</li>
<li>Recursos sob medida</li>
</ul>
<button className="plan-btn">Solicitar Proposta</button>
</div>
</div>
<div style={{ marginTop: '2.2rem', fontSize: '0.95rem', color: '#798ad6', opacity: 0.87 }}>
        *Todos os planos incluem segurança de dados, atualizações contínuas e estão protegidos pela tecnologia ZFX Studios.
      </div>
</section>
{/* <!-- SECURITY SECTION --> */}
<section className="container features-section" id="security" style={{ marginTop: 0 }}>
<div className="feature" style={{ flexBasis: '100%' }}>
<span className="feature-icon">🛡️</span>
<div className="feature-title">Inovação que Garante Confiança</div>
<div className="feature-desc">
          O Veridi não apenas centraliza informações — ele redefine a proteção da relação cliente-advogado. Todos os acessos, notificações e documentos são validados dentro do próprio sistema, eliminando ruídos, riscos de fraude e comunicações falsas por aplicativos de terceiros.
        </div>
</div>
</section>
{/* <!-- TESTIMONIALS --> */}
<section className="container testimonials-section" id="testimonials">
<div className="testimonials-title">O que dizem nossos clientes</div>
<div className="testimonials">
<div className="testimonial">
<div className="testimonial-text">“O Veridi transformou o relacionamento com nossos clientes: comunicação segura, clareza nos processos e fim das dúvidas sobre mensagens suspeitas.”</div>
<div className="testimonial-author">— Dra. Camila Martins, OAB/SP</div>
</div>
<div className="testimonial">
<div className="testimonial-text">“Simples, prático e inovador. O sistema facilitou o envio de documentos e diminuiu o volume de ligações e e-mails no escritório.”</div>
<div className="testimonial-author">— Dr. Leandro Costa, OAB/RJ</div>
</div>
<div className="testimonial">
<div className="testimonial-text">“Meus clientes elogiam a facilidade de acompanhar seus processos e o atendimento personalizado. O Veridi elevou nosso padrão de qualidade.”</div>
<div className="testimonial-author">— Ana Silveira, Gestora Jurídica</div>
</div>
</div>
</section>
{/* <!-- CALL TO ACTION --> */}
<section className="container cta-section" id="contact">
<div className="cta-title">Experimente a nova era da gestão jurídica</div>
<div className="cta-desc">
        Dê o próximo passo em inovação, segurança e eficiência para o seu escritório de advocacia. Solicite uma demonstração personalizada e descubra como o Veridi pode transformar a rotina de advogados e clientes.
      </div>
<button className="cta-btn" onClick={() => alert("Em breve! Deixe seu contato para ser avisado.")}>Solicitar Demonstração</button>
</section>
</main>
<footer>
<div className="footer-content container">
<div className="footer-section">
<div className="footer-logo">Veridi</div>
<div>
          Plataforma desenvolvida para escritórios de advocacia que buscam excelência em organização, comunicação e segurança.
        </div>
<div className="footer-zfx">
<img alt="ZFX Studios Logo" src="https://zfxstudios.com.br/logo-simple-blue.svg" style={{ height: '22px', width: 'auto' }} />
          Sistema protegido e desenvolvido por ZFX Studios
        </div>
</div>
<div className="footer-section footer-links">
<div className="footer-title">Navegação</div>
<a href="#features">Funcionalidades</a>
<a href="#plans">Planos</a>
<a href="#security">Segurança</a>
<a href="#testimonials">Depoimentos</a>
<a href="#contact">Contato</a>
</div>
<div className="footer-section footer-links">
<div className="footer-title">Contato</div>
<a href="mailto:contato@veridi.com.br">contato@veridi.com.br</a>
<a href="#">LinkedIn</a>
<a href="#">Política de Privacidade</a>
</div>
</div>
<div className="footer-note">
      © 2025 Veridi. Todos os direitos reservados. — Um sistema ZFX Studios.
    </div>
</footer>


    </>
  );
}

export default App;
