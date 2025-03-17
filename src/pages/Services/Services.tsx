import styles from './Services.module.css';
import { ServiceCard } from './ServiceCard';

export default function Services() {
  return (
    <div className={styles.pageContainer}>

      <section className={styles.hero}>
        <div className={styles.overlay}>
          <h2>Conheça os nossos serviços</h2>
          <p>Temos as melhores soluções tecnológicas para alavancar o seu negócio!</p>
          <button className={styles.ctaButton}>Entre agora em contato!</button>
        </div>
      </section>

      <section className={styles.servicesList}>
        <ServiceCard
          icon="/services/ConsultoriaService.jpg"
          title="Consultoria e Solução"
          description="Nós ajudamos a diagnosticar as principais necessidades do seu negócio, propondo soluções inteligentes e personalizadas. Com uma equipe especialista em processos e tecnologias, oferecemos consultoria estratégica para alavancar resultados."
        />
        <ServiceCard
          icon="/services/desenvolvimentoService.jpg"
          title="Desenvolvimento de Software"
          description="Criamos soluções digitais sob medida para atender às necessidades únicas do seu negócio. Nossa equipe de especialistas em engenharia de software utiliza as mais recentes tecnologias para projetar, construir e manter aplicações de alto desempenho, escaláveis e seguras."
        />
        <ServiceCard
          icon="/services/DesignService.jpg"
          title="Marketing e Design"
          description="Damos vida à identidade da sua marca, criando experiências visuais impactantes e alinhadas aos seus objetivos de negócio. Nossa equipe trabalha em cada detalhe desde o conceito criativo e identidade visual até layouts e interfaces modernas."
        />
        <ServiceCard
          icon="/services/hardwareServices.jpg"
          title="Suporte e Hardware"
          description="Oferecemos suporte técnico especializado e soluções de hardware para manter sua infraestrutura sempre funcional e eficiente. Do diagnóstico de falhas à manutenção preventiva, nossa equipe atua de forma rápida e precisa."
         />
      </section>
    </div>
  );
}
