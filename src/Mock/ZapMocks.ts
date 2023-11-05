import { IZapBasic } from '@/interfaces/zapInterfaces'

const mockZaps: IZapBasic[] = [
  {
    id: 1,
    title: 'Ciclo Celular e Divisão Celular',
    description:
      'Este questionário explora os diferentes estágios do ciclo celular e o processo de divisão celular.',
    difficulty: 'easy',
    percentEndings: 90,
    attempts: 25,
    creatAt: '10/10/2023',
    updatedAt: '12/10/2023',
  },
  {
    id: 2,
    title: 'Genética Mendeliana',
    description:
      'Analise os princípios básicos da genética descobertos por Gregor Mendel e como eles se aplicam a diferentes organismos.',
    difficulty: 'medium',
    percentEndings: 60,
    attempts: 50,
    creatAt: '15/09/2023',
    updatedAt: '18/09/2023',
  },
  {
    id: 3,
    title: 'Fisiologia Humana: Sistema Cardiovascular',
    description:
      'Explore o funcionamento do sistema circulatório humano, incluindo o coração, vasos sanguíneos e circulação sanguínea.',
    difficulty: 'hard',
    percentEndings: 30,
    attempts: 100,
    creatAt: '20/08/2023',
    updatedAt: '22/08/2023',
  },
  {
    id: 4,
    title: 'Ecossistemas Aquáticos',
    description:
      'Estude os diferentes tipos de ecossistemas aquáticos, incluindo oceanos, rios, lagos e pântanos.',
    difficulty: 'medium',
    percentEndings: 70,
    attempts: 40,
    creatAt: '05/11/2023',
    updatedAt: '07/11/2023',
  },
  {
    id: 5,
    title: 'Metabolismo Celular',
    description:
      'Aprofunde-se no processo de metabolismo celular, incluindo catabolismo e anabolismo de diferentes nutrientes.',
    difficulty: 'hard',
    percentEndings: 20,
    attempts: 80,
    creatAt: '08/11/2023',
    updatedAt: '10/11/2023',
  },
  {
    id: 6,
    title: 'Genética Molecular',
    description:
      'Estude os aspectos moleculares da genética, incluindo estrutura do DNA, replicação e expressão gênica.',
    difficulty: 'medium',
    percentEndings: 50,
    attempts: 60,
    creatAt: '12/11/2023',
    updatedAt: '15/11/2023',
  },
  {
    id: 7,
    title: 'Sistema Nervoso: Anatomia e Fisiologia',
    description:
      'Conheça a anatomia e fisiologia do sistema nervoso, incluindo o cérebro, medula espinhal e nervos periféricos.',
    difficulty: 'hard',
    percentEndings: 30,
    attempts: 100,
    creatAt: '18/11/2023',
    updatedAt: '20/11/2023',
  },
  {
    id: 8,
    title: 'Evolução das Espécies',
    description:
      'Explore os mecanismos e evidências da evolução biológica e a diversidade de vida na Terra.',
    difficulty: 'easy',
    percentEndings: 90,
    attempts: 20,
    creatAt: '22/11/2023',
    updatedAt: '25/11/2023',
  },
  {
    id: 9,
    title: 'Microbiologia Básica',
    description:
      'Estude os microrganismos, incluindo bactérias, vírus e fungos, e seu papel em diferentes ambientes e processos biológicos.',
    difficulty: 'medium',
    percentEndings: 70,
    attempts: 35,
    creatAt: '30/11/2023',
    updatedAt: '02/12/2023',
  },
  {
    id: 10,
    title: 'Imunologia: Sistema Imune',
    description:
      'Aprofunde-se no sistema imunológico, incluindo células imunes, resposta imune e imunização.',
    difficulty: 'hard',
    percentEndings: 40,
    attempts: 90,
    creatAt: '05/12/2023',
    updatedAt: '07/12/2023',
  },
]

const zapMocks = { mockZaps }
export default zapMocks
