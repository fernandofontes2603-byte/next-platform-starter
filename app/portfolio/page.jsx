'use client';

import Link from 'next/link';

const portfolioData = {
  name: 'Fernando Martins Fontes',
  title: 'Liderança e Inovação em Supply Chain',
  contact: {
    location: 'São Paulo, SP',
    phone: '(11) 93141-6975',
    email: 'fernando.fontes@hotmail.com.br',
    linkedin: 'https://www.linkedin.com/in/fernandomartinsfontes'
  },
  summary: `Executivo com mais de 25 anos de trajetória em Supply Chain, Logística Integrada e Operações Industriais. Referência em transformação logística, digitalização de processos e liderança de alta performance. Especialista na aplicação de tecnologias como SAP, WMS, TMS, RFID, Inteligência Artificial e Power BI.`,
  regionalCDs: [
    {
      region: 'SUDESTE',
      location: 'São Paulo, SP',
      highlights: [
        'Gerência de 3 centros de distribuição',
        'Movimentação de 50 mil toneladas/mês',
        'Acuracidade de estoque: 98%',
        'Redução de lead time: 25%'
      ],
      metrics: {
        costReduction: '15%',
        deliveryAccuracy: '97%',
        efficiency: '95%'
      }
    },
    {
      region: 'SUL',
      location: 'Santa Catarina/RS',
      highlights: [
        'Otimização de rotas multimodais',
        'Integração de logística verde',
        'Redução de emissões de CO²: 10%',
        'Modernização de processos Lean'
      ],
      metrics: {
        costReduction: '18%',
        deliveryAccuracy: '96%',
        sustainability: 'ESG Certified'
      }
    },
    {
      region: 'NORDESTE',
      location: 'Ceará',
      highlights: [
        'Implantação de torre de controle logística',
        'Visibilidade em tempo real 24/7',
        'Redução de atrasos: 12% para 3%',
        'Integração com sistemas SaaS'
      ],
      metrics: {
        delayReduction: '75%',
        visibility: '100%',
        automation: '85%'
      }
    }
  ],
  keyCompetencies: [
    'Gestão integrada de Supply Chain',
    'Implantação de torres de controle',
    'Indicadores: KPI, SLA, OTIF, OEE',
    'Digitalização e integração de sistemas',
    'Gestão de custos e multimodalidade',
    'Lean Logistics e melhoria contínua',
    'Liderança de equipes multiníveis',
    'ESG e logística verde'
  ],
  currentRole: {
    title: 'Gerente Nacional de Logística',
    company: 'Braskem Indústria Plástica',
    period: 'Março/2020 - Atual',
    achievements: [
      'Gestão de 3 CDs em 3 regiões com 350+ colaboradores',
      'Movimentação de 50 mil toneladas/mês',
      'Redução de custos de frete: 15%',
      'Implantação de Torre de Controle Logística',
      'Aumento de acuracidade para 98%',
      'Redução de lead time em 25%',
      'Redução de emissões de CO² em 10%'
    ]
  }
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/95 backdrop-blur">
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-white font-bold text-xl">FM</div>
          <div className="hidden md:flex gap-8 text-slate-300">
            <a href="#summary" className="hover:text-amber-400 transition">Resumo</a>
            <a href="#regions" className="hover:text-amber-400 transition">Regiões</a>
            <a href="#competencies" className="hover:text-amber-400 transition">Competências</a>
          </div>
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-amber-500 text-black rounded-lg font-semibold hover:bg-amber-400 transition">
            LinkedIn
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          {portfolioData.name}
        </h1>
        <p className="text-2xl md:text-3xl text-amber-400 font-italic mb-8">
          {portfolioData.title}
        </p>
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <span className="text-slate-300">📍 {portfolioData.contact.location}</span>
          <span className="text-slate-300">📞 {portfolioData.contact.phone}</span>
          <a href={`mailto:${portfolioData.contact.email}`} className="text-amber-400 hover:underline">
            {portfolioData.contact.email}
          </a>
        </div>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {portfolioData.summary}
        </p>
      </section>

      {/* Current Role */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 bg-slate-800/50 rounded-xl">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
          <span className="w-1 h-8 bg-amber-400 mr-3"></span>
          {portfolioData.currentRole.title}
        </h2>
        <p className="text-xl text-amber-400 font-semibold">{portfolioData.currentRole.company}</p>
        <p className="text-slate-400 mb-6">{portfolioData.currentRole.period}</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolioData.currentRole.achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-200">
              <span className="text-amber-400 text-xl mt-1">✓</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Regional CDs Management */}
      <section id="regions" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center">
          <span className="w-1 h-10 bg-amber-400 mr-3"></span>
          Gestão Multi-Regional de Centros de Distribuição
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.regionalCDs.map((cd, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-8 border border-slate-600 hover:border-amber-400 transition hover:shadow-lg hover:shadow-amber-400/20">
              <h3 className="text-2xl font-bold text-amber-400 mb-2">{cd.region}</h3>
              <p className="text-slate-300 mb-6 font-semibold">📍 {cd.location}</p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Destaques:</h4>
                <ul className="space-y-2">
                  {cd.highlights.map((highlight, hidx) => (
                    <li key={hidx} className="text-slate-300 flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="border-t border-slate-600 pt-4">
                <h4 className="text-white font-semibold mb-3">Métricas de Impacto:</h4>
                <div className="space-y-2">
                  {Object.entries(cd.metrics).map(([key, value], midx) => (
                    <div key={midx} className="flex justify-between text-slate-300">
                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                      <span className="font-bold text-amber-400">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Competencies */}
      <section id="competencies" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 bg-slate-800/50 rounded-xl">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
          <span className="w-1 h-8 bg-amber-400 mr-3"></span>
          Competências Estratégicas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.keyCompetencies.map((competency, idx) => (
            <div key={idx} className="bg-slate-700/50 rounded-lg p-4 border-l-4 border-amber-400">
              <p className="text-slate-100 font-semibold">✓ {competency}</p>
            </div>
          ))}
        </div>
      </section>

                                                   {/* Professional Experience */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center">
          <span className="w-1 h-10 bg-amber-400 mr-3"></span>
          Experiência Profissional Completa
        </h2>
        <div className="space-y-8">
          {/* Braskem */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg p-6 border-l-4 border-amber-400">
            <h3 className="text-2xl font-bold text-white mb-1">Gerente Nacional de Logística</h3>
            <p className="text-amber-400 font-semibold mb-2">Braskem Indústria Plástica</p>
            <p className="text-slate-400 mb-4">Março/2020 - Atual</p>
            <ul className="space-y-2 text-slate-300">
              <li>✓ Gestão de 3 CDs em 3 regiões com 350+ colaboradores</li>
              <li>✓ Movimentação de 50 mil toneladas/mês</li>
              <li>✓ Redução de custos: 15% | Lead time: 25% | Acuracidade: 98%</li>
              <li>✓ Implantação de Torre de Controle Logística com visibilidade 24/7</li>
            </ul>
          </div>
          {/* Cintitec */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg p-6 border-l-4 border-amber-400">
            <h3 className="text-2xl font-bold text-white mb-1">Gerente de Logística</h3>
            <p className="text-amber-400 font-semibold mb-2">Cintitec Ambiental</p>
            <p className="text-slate-400 mb-4">Fevereiro/2018 - Março/2020</p>
            <ul className="space-y-2 text-slate-300">
              <li>✓ Implantação WMS e TMS com acuracidade 98%</li>
              <li>✓ Redução de custos: 10% | Ganho de 50% em eficiência de entregas</li>
              <li>✓ Gestão de 172 colaboradores</li>
              <li>✓ Certificações ISO 9001 e 14001</li>
            </ul>
          </div>
          {/* Kanaflex */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg p-6 border-l-4 border-amber-400">
            <h3 className="text-2xl font-bold text-white mb-1">Supervisor de Logística</h3>
            <p className="text-amber-400 font-semibold mb-2">Kanaflex Indústria Plástica</p>
            <p className="text-slate-400 mb-4">Novembro/2010 - Setembro/2017</p>
            <ul className="space-y-2 text-slate-300">
              <li>✓ Redução de 30% no tempo de inatividade operacional</li>
              <li>✓ Economia anual de R$ 380 mil</li>
              <li>✓ Melhoria de 20% na rotatividade de estoque</li>
              <li>✓ Ganho de 12 minutos por pedido processado</li>
            </ul>
          </div>
          {/* REFAL */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg p-6 border-l-4 border-amber-400">
            <h3 className="text-2xl font-bold text-white mb-1">Coordenador de Expedição</h3>
            <p className="text-amber-400 font-semibold mb-2">REFAL / BLACK+DECKER</p>
            <p className="text-slate-400 mb-4">Maio/2007 - Novembro/2010</p>
            <ul className="space-y-2 text-slate-300">
              <li>✓ Atendimento a grandes montadoras: Honda, Ford, VW, GM, Scania, Volvo, Toyota</li>
              <li>✓ Implantação RFID e WMS para rastreabilidade total</li>
              <li>✓ Reestruturação de armazenagem e embalagens</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Academic Formation */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 bg-slate-800/50 rounded-xl">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
          <span className="w-1 h-8 bg-amber-400 mr-3"></span>
          Formação Acadêmica
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-700/50 rounded-lg p-4 border-l-4 border-amber-400">
            <p className="text-white font-bold mb-1">📚 MBA em IA & Big Data</p>
            <p className="text-slate-400 text-sm">2025</p>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-4 border-l-4 border-amber-400">
            <p className="text-white font-bold mb-1">📚 Pós-Graduação Gestão de Pessoas</p>
            <p className="text-slate-400 text-sm">2024</p>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-4 border-l-4 border-amber-400">
            <p className="text-white font-bold mb-1">📚 Pós-Graduação Gestão Ambiental</p>
            <p className="text-slate-400 text-sm">2019</p>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-4 border-l-4 border-amber-400">
            <p className="text-white font-bold mb-1">📚 Mestrado em Administração</p>
            <p className="text-slate-400 text-sm">2017</p>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-4 border-l-4 border-amber-400">
            <p className="text-white font-bold mb-1">📚 MBA em Estratégia Empresarial</p>
            <p className="text-slate-400 text-sm">2011</p>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-4 border-l-4 border-amber-400">
            <p className="text-white font-bold mb-1">📚 Graduação em Logística</p>
            <p className="text-slate-400 text-sm">2010</p>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-4 border-l-4 border-amber-400">
            <p className="text-white font-bold mb-1">📚 Graduação em Administração</p>
            <p className="text-slate-400 text-sm">2002</p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
          <span className="w-1 h-8 bg-amber-400 mr-3"></span>
          Certificações Profissionais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-amber-900/30 rounded-lg p-4 border-l-4 border-amber-400">
            <p className="text-amber-300 font-bold mb-1">🏆 APICS - PIM</p>
            <p className="text-slate-400 text-sm">Production and Inventory Management (2019)</p>
          </div>
          <div className="bg-amber-900/30 rounded-lg p-4 border-l-4 border-amber-400">
            <p className="text-amber-300 font-bold mb-1">🏆 Auditor ISO</p>
            <p className="text-slate-400 text-sm">ISO 9001, 14001, IATF 16949 (2023)</p>
          </div>
          <div className="bg-amber-900/30 rounded-lg p-4 border-l-4 border-amber-400">
            <p className="text-amber-300 font-bold mb-1">🏆 BI Intelligence</p>
            <p className="text-slate-400 text-sm">Power BI & Análise de Dados (2024)</p>
          </div>
          <div className="bg-amber-900/30 rounded-lg p-4 border-l-4 border-amber-400">
            <p className="text-amber-300 font-bold mb-1">🏆 FMEA</p>
            <p className="text-slate-400 text-sm">Produção Sustentável (2024)</p>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-slate-700 mt-20 py-8 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Fernando Martins Fontes - Liderança e Inovação em Supply Chain</p>
        </div>
      </footer>
    </div>
  );
}
