export const nodeName = [
    "technology stack",
    "language",
    "data structure and algorithm",
    "(math/logic)theory",
    "graphics",
    "environment",
    "c&c++",
    "python",
    "etc..",
    "data structure",
    "algorithm",
    "discrete mathematics",
    "linear algebra",
    "logic circuit",
    "computer architecture",
    "operating system",
    "open gl",
    "image processing",
    "lab research",
    "windows",
    "linux",
    "git"
];

export const state = {
    "technology stack":"왼쪽 그래프는 학습했던 기술스택에 대해 정리, 기술합니다. 해당 노드를 좌측클릭하면 설명이, 우측클릭하면 줌인 기능을 지원하고 있습니다.",
    "language":"프로그래밍 개발언어입니다. 주요언어는 python3, c/c++위주로 개발하였습니다. 이외 학습했던 언어는 etc로 분류하였습니다.",
    "data structure and algorithm":"자료구조&알고리즘 학습입니다. 테스트 언어는 c/c++(gcc)로 작성하였습니다.",
    "(math/logic)theory":"대학 전공/교양 수업으로 공부했던 이론 수업 위주의 자료입니다.",
    "graphics":"c++ level에서 OpenGL로 작성하였습니다. 영상처리도 하위항목으로 분류하였습니다. 영상처리는 c++,python에서 작성하였으며 OpenCV구현과 활용에 대하여 학습하였습니다. ",
    "environment":"개발환경에 대한 카테고리입니다. ubuntu와 window10, raspbian을 주로 사용하였습니다. 환경구축을 기술하였습니다. ",
    "c&c++":"window10(visual studio),linux(gcc) 기본적인 자료구조&알고리즘부터, 그래픽스&영상처리에 주로 사용하였습니다.",
    "python":"python3(vim,pdb,venv), OpenCV,matplotlib,tkinter로 GUI, 영상처리, 그래프분석, IOT 스마트 윈도우에 사용하였습니다.",
    "etc..":"수업, 토이프로젝트로 제작한 코딩입니다. java(swing), VBA(EXCEL), C#(GUI), FORTRAN 등을 활용하였습니다.",
    "data structure":"자료구조의 기본 개념과 직접 구현한 코드입니다. c/c++로 제작하였으며, array,linked list로 구현하였습니다.",
    "algorithm":"알고리즘의 기본 개념과 직접 구현한 코드입니다. c/c++로 제작하였으며, 실제 시간복잡도 측정의 경우에는 멀티코어 시스템(데이터버스의 병렬화)에서 구동하여, 이론상의 시간복잡도와 다른 결과가 나타날수 있습니다.",
    "discrete mathematics":"이산수학의 기본적인 개념(논리,증명,집합론,조합론,그래프 이론)등을 학습하였습니다. domain, codomain의 관계는 컴퓨터 수학의 기본을 이해하는데 많은 도움을 주었습니다.",
    "linear algebra":"선형대수학의 matrix, vector의 기본개념과 내적 외적등을 학습하였습니다. 해당 지식은 차후 computer graphics에서 활용하는데 많은 도움을 주었습니다.",
    "logic circuit":"논리게이트, 카르노맵등을 활용하여 컴퓨터의 논리식의 기본 구성등을 학습하였습니다. ",
    "computer architecture":"컴퓨터의 직/간접 1,2,3주소 방식등을 학습하였습니다. ",
    "operating system":"스레드관리, 프로세스관리(세마포어, 뮤텍스록), 페이징기법 등을 공부하였습니다.",
    "open gl":"c/c++로 개발하였습니다. 기본적인 2d 3d 그래픽스를 이용 image processing rendering, pong-model/rendering , path tracing 등에 대한 연구 및 학습을 하였습니다. ",
    "image processing":"obj에 구성된 구조를 이해하고 분석하였습니다. ",
    "lab research":"path tracing에서 최초 pepper noise를 줄이기 위한 연구로써 filtering을 적용한 연구를 시도하였습니다.",
    "windows":"visual studio, powershell, micro office등 활용 가능합니다.",
    "linux":"vim, makefile, docker(-compose)등을 이용하여 프로젝트를 작성하였습니다. 현재 개인 home server로 ubuntu를 사용하고 있으며, raspbian을 이용한 smart window project를 진행한 경험이 있습니다. ",
    "git":"현재 github에 학습자료등을 관리하고 있습니다. 참고해주시면 감사하겠습니다."
}

const MASTER_PATH = 'https://github.com/BangGyoo/Portfolio_Gyoo/blob/master/';

export const tileData = {
    "technology stack" : [
        {
             img: '/my_home_page_source/background/b1.jpg',
             title: 'b1',
             author: 'author',
             link: 'http://www.naver.com',
        },
        { 
             img: '/my_home_page_source/background/b2.jpg',
             title: 'b2',
             author: 'author',
             link: './txtFiles/c.md',
        },
        {
             img: '/my_home_page_source/background/b3.jpg',
             title: 'b3',
             author: 'author'
        }
    ],

    "language": [
        {
             img: '/my_home_page_source/background/b1.jpg',
             title: 'b1',
             author: 'author',
             link: 'http://www.naver.com',
        },
        { 
             img: '/my_home_page_source/background/b2.jpg',
             title: 'b2',
             author: 'author',
             link: './txtFiles/c.md',
        },
        {
             img: '/my_home_page_source/background/b3.jpg',
             title: 'b3',
             author: 'author'
        }
    ],
    "data structure and algorithm": [
        {
             img: '/my_home_page_source/background/b1.jpg',
             title: 'b1',
             author: 'author',
             link: 'http://www.naver.com',
        },
        { 
             img: '/my_home_page_source/background/b2.jpg',
             title: 'b2',
             author: 'author',
             link: './txtFiles/c.md',
        },
        {
             img: '/my_home_page_source/background/b3.jpg',
             title: 'b3',
             author: 'author'
        }
    ],
    "(math/logic)theory": [
        {
             img: '/my_home_page_source/background/b1.jpg',
             title: 'b1',
             author: 'author',
             link: 'http://www.naver.com',
        },
        { 
             img: '/my_home_page_source/background/b2.jpg',
             title: 'b2',
             author: 'author',
             link: './txtFiles/c.md',
        },
        {
             img: '/my_home_page_source/background/b3.jpg',
             title: 'b3',
             author: 'author'
        }
    ],
    "graphics": [
        {
             img: '/my_home_page_source/background/b1.jpg',
             title: 'b1',
             author: 'author',
             link: 'http://www.naver.com',
        },
        { 
             img: '/my_home_page_source/background/b2.jpg',
             title: 'b2',
             author: 'author',
             link: './txtFiles/c.md',
        },
        {
             img: '/my_home_page_source/background/b3.jpg',
             title: 'b3',
             author: 'author'
        }
    ],
    "environment": [
        {
             img: '/my_home_page_source/background/b1.jpg',
             title: 'b1',
             author: 'author',
             link: 'http://www.naver.com',
        },
        { 
             img: '/my_home_page_source/background/b2.jpg',
             title: 'b2',
             author: 'author',
             link: './txtFiles/c.md',
        },
        {
             img: '/my_home_page_source/background/b3.jpg',
             title: 'b3',
             author: 'author'
        }
    ],
    "c&c++": [
        {
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/blob/master/language/c&c++/1.png?raw=true',
             title: 'b1',
             author: 'author',
             link: MASTER_PATH + '/language/c%26c%2B%2B/',
        },
        { 
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/language/c%26c%2B%2B/2.png?raw=true',
             //img: '/my_home_page_source/background/b2.jpg',
             title: 'b2',
             author: 'author',
             link: '',
        },
        {
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/language/c%26c%2B%2B/3.jpg?raw=true',
             //img: '/my_home_page_source/background/b3.jpg',
             title: 'b3',
             author: 'author'
        }
    ],
    "python": [
        {
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/language/python/1.png?raw=true',
             title: 'b1',
             author: 'author',
             link: '',
        },
        { 
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/language/python/2.gif?raw=true',
             title: 'b2',
             author: 'author',
             link: '',
        },
        {
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/language/python/3.gif?raw=true',
             title: 'b3',
             author: 'author'
        }
    ],
    "etc..": [
        {
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/language/etc/1.gif?raw=true',
             title: 'b1',
             author: 'author',
             link: '',
        },
        { 
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/language/etc/3.png?raw=true',
             title: 'b2',
             author: 'author',
             link: '',
        },
        {
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/language/etc/6.bmp?raw=true',
             title: 'b3',
             author: 'author'
        }
    ],
    "data structure": [
        {
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/data%20structure/data%20structure/2.jpg?raw=true',
             title: 'b1',
             author: 'author',
             link: '',
        },
        { 
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/data%20structure/data%20structure/1.png?raw=true',
             title: 'b2',
             author: 'author',
             link: '',
        },
        {
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/data%20structure/data%20structure/3.png?raw=true',
             title: 'b3',
             author: 'author'
        }
    ],
    "algorithm": [
        {
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/data%20structure/algorithm/1.bmp?raw=true',
             title: 'b1',
             author: 'author',
             link: '',
        },
        { 
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/data%20structure/algorithm/2.png?raw=true',
             title: 'b2',
             author: 'author',
             link: '',
        },
        {
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/data%20structure/algorithm/3.bmp?raw=true',
             title: 'b3',
             author: 'author'
        }
    ],
    "discrete mathematics": [
        {
             img: '',
             title: 'b1',
             author: 'author',
             link: '',
        },
        { 
             img: '',
             title: 'b2',
             author: 'author',
             link: '',
        },
        {
             img: '',
             title: 'b3',
             author: 'author'
        }
    ],
    "linear algebra": [
        {
             img: '',
             title: 'b1',
             author: 'author',
             link: '',
        },
        { 
             img: '',
             title: 'b2',
             author: 'author',
             link: '',
        },
        {
             img: '',
             title: 'b3',
             author: 'author'
        }
    ],

    "logic circuit": [
        {
             img: '',
             title: 'b1',
             author: 'author',
             link: '',
        },
        { 
             img: '',
             title: 'b2',
             author: 'author',
             link: '',
        },
        {
             img: '',
             title: 'b3',
             author: 'author'
        }
    ],
    "computer architecture": [
        {
             img: '',
             title: 'b1',
             author: 'author',
             link: '',
        },
        { 
             img: '',
             title: 'b2',
             author: 'author',
             link: '',
        },
        {
             img: '',
             title: 'b3',
             author: 'author'
        }
    ],
    "operating system": [
        {
             img: '',
             title: 'b1',
             author: 'author',
             link: '',
        },
        { 
             img: '',
             title: 'b2',
             author: 'author',
             link: '',
        },
        {
             img: '',
             title: 'b3',
             author: 'author'
        }
    ],
    "open gl": [
        {
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/graphics/open%20gl/3.gif?raw=true',
             title: 'b1',
             author: 'author',
             link: '',
        },
        { 
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/graphics/open%20gl/4.jpg?raw=true',
             title: 'b2',
             author: 'author',
             link: '',
        },
        {
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/graphics/open%20gl/6.gif?raw=true',
             title: 'b3',
             author: 'author'
        }
    ],
    "image processing": [
        {
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/graphics/image%20processing/1.png?raw=true',
             title: 'b1',
             author: 'author',
             link: '',
        },
        { 
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/graphics/image%20processing/2.gif?raw=true',
             title: 'b2',
             author: 'author',
             link: '',
        },
        {
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/language/python/2.gif?raw=true',
             title: 'b3',
             author: 'author'
        }
    ],
    "lab research": [
        {
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/graphics/lab%20research/5.png?raw=true',
             title: 'b1',
             author: 'author',
             link: '',
        },
        { 
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/graphics/lab%20research/3.png?raw=true',
             title: 'b2',
             author: 'author',
             link: '',
        },
        {
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/graphics/lab%20research/4.png?raw=true',
             title: 'b3',
             author: 'author'
        }
    ],
    "windows": [
        {
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/language/c&c++/2.png?raw=true',
             title: 'b1',
             author: 'author',
             link: '',
        },
        { 
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/environment/windows/2.png?raw=true',
             title: 'b2',
             author: 'author',
             link: '',
        },
        {
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/environment/windows/3.png?raw=true',
             title: 'b3',
             author: 'author'
        }
    ],
    "linux": [
        {
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/environment/linux/1.png?raw=true',
             title: 'b1',
             author: 'author',
             link: '',
        },
        { 
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/language/python/3.gif?raw=true',
             title: 'b2',
             author: 'author',
             link: '',
        },
        {
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/environment/linux/3.png?raw=true',
             title: 'b3',
             author: 'author'
        }
    ],
    "git": [
        {
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/environment/git/1.png?raw=true',
             title: 'b1',
             author: 'author',
             link: '',
        },
        { 
             img: 'https://github.com/BangGyoo/Portfolio_Gyoo/raw/master/environment/git/2.png?raw=true',
             title: 'b2',
             author: 'author',
             link: '',
        },
    ],

};

;
export const source_path = "my_home_page_source/graph/";
export const source_file = ["technology_stack.svg": [
        {
             img: '/my_home_page_source/background/b1.jpg',
             title: 'b1',
             author: 'author',
             link: 'http://www.naver.com',
        },
        { 
             img: '/my_home_page_source/background/b2.jpg',
             title: 'b2',
             author: 'author',
             link: './txtFiles/c.md',
        },
        {
             img: '/my_home_page_source/background/b3.jpg',
             title: 'b3',
             author: 'author'
        }
    ],
                    "language.svg",
                    "data_structure_algorithm.svg",
                    "theory.svg",
                    "graphics.svg",
                    "environment.svg",
                    "c_lang.svg",
                    "python.svg",
                    "etc.svg",
                    "data_structure.svg",
                    "algorithm.svg",
                    "discrete_mathematics.svg",
                    "linear_algebra.svg",
                    "logic_circuit.svg",
                    "computer_architecture.svg",
                    "operating_system.svg",
                    "open_gl.svg",
                    "obj_file.svg",
                    "lab_research.svg",
                    "windows.svg",
                    "linux.svg",
                    "git.svg",
                   ];

