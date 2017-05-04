/* --- menu items --- */
var TREE_ITEMS = [
	['Proiektua XX', null,
			['Azala', '../Proiektua/0_1_azala.odt'],
			['Aurkibide orokorra', '../Proiektua/0_2_aurkibidea.odt'],
			
			['Memoria','../Proiektua/Memoria/1_0_memoria.htm',
				['Identifikazio orriak', '../Proiektua/Memoria/1_1_identifikazio_orriak.odt'],
				['Sarrera', '../Proiektua/Memoria/1_2_sarrera.odt'],
				['Xedea', '../Proiektua/Memoria/1_3_xedea.odt'],
				['Aurrekariak', '../Proiektua/Memoria/1_4_aurrekariak.odt'],
				['Egungo egoera', '../Proiektua/Memoria/1_5_egungo_egoera.odt'],
			    ['Arauak eta erreferentziak', '../Proiektua/Memoria/1_6_arauak_erreferentziak.odt',
                     ['<A HREF="../Proiektua/Memoria/1_6_arauak_erreferentziak.odt#Disposizio_legalak_eta_aplikatutako_arauak" target="nagusia">Xedapen legalak eta aplikatutako normak</A>'],
                     ['Bibliografia', '../Proiektua/Memoria/1_6_1_bibliografia.odt'],
                     ['Metodoak, herramintak, ereduak, metrikak eta prototipoak', '../Proiektua/Memoria/1_6_2_metodoak_tresnak_garapena.odt'],
                     ['Proiektuaren idazketan zehar aplikatutako kalitate kudeaketa plana', '../Proiektua/Memoria/1_6_3_kalitatearen_kudeaketa.odt'],
                     ['Beste erreferentziak', '../Proiektua/Memoria/1_6_4_beste_erreferentziak.odt']
                ],
				['Definizionak eta laburdurak', '../Proiektua/Memoria/1_7_def_laburdurak.odt'],
				['Hasierako betekizunak', '../Proiektua/Memoria/1_8_hasierako_betekizunak.odt'],
				['Norainokoa', '../Proiektua/Memoria/1_9_norainokoa.odt'],
				['Hipotesiak eta mugapenak', '../Proiektua/Memoria/1_10_hipotesiak_mugapenak.odt'],
				['Aukeren ikerketa eta egingarritasuna', '../Proiektua/Memoria/1_11_egingarritasuna.odt'],
				['Proposatutako sistemaren deskribapena', '../Proiektua/Memoria/1_12_proposatutako_sistema.odt'],
                ['Arrisku analisia', '../Proiektua/Memoria/1_13_arrisku_analisia.odt'],
                ['Proiektuaren antolaketa eta kudeaketa', '../Proiektua/Memoria/1_14_antolaketa_kudeaketa.odt'],
                ['Behin-behineko planifikazioa', '../Proiektua/Memoria/1_15_behin_behineko_planif.odt'],
                ['Aurrekontua', '../Proiektua/Memoria/1_16_aurrekontua.odt']
            ],
         

			['Eranskinak','../Proiektua/Memoria-Eranskinak/2_0_memoria_eranskinak.odt',
            
                ['Sistemaren analisi eta diseinua', '../Proiektua/Memoria-Eranskinak/2_1_analisia_diseinua.odt',
                    ['Analisia: Sistemaren analisi ereduak', '../Proiektua/Memoria-Eranskinak/2_1_1_analisi_ereduak.odt'],
                    ['Diseinua: Sistemaren arkitektura', '../Proiektua/Memoria-Eranskinak/2_1_2_arkitektura.odt'],
                    ['Diseinua: Funtzionalitate eredua', '../Proiektua/Memoria-Eranskinak/2_1_3_funtzionalitate_eredua.odt'],
                    ['Diseinua: Interfaze eredua', '../Proiektua/Memoria-Eranskinak/2_1_4_interfaze_eredua.odt'],
                    ['Diseinua: Datu eredua', '../Proiektua/Memoria-Eranskinak/2_1_5_datu_eredua.odt'],
                    ['Architecture', '../Proiektua/Memoria-Eranskinak/2_1_6_arkitektura.odt',
                        ['Architecture notebook', '../Proiektua/Memoria-Eranskinak/2_1_6_1_arkit_eskuliburua.odt']
                        ],
                    ['Development', '../Proiektua/Memoria-Eranskinak/2_1_7_garapena.odt',
                        ['Build', '../Proiektua/Memoria-Eranskinak/2_1_7_1_eraiketa.odt'],
                        ['Design', '../Proiektua/Memoria-Eranskinak/2_1_7_2_diseinua.odt'],
                        ['Developer Test', '../Proiektua/Memoria-Eranskinak/2_1_7_3_garapen_testak.odt'],
                        ['Implementation', '../Proiektua/Memoria-Eranskinak/2_1_7_4_inplementazioa.odt']
                        ],
                    ['Test', '../Proiektua/Memoria-Eranskinak/2_1_8_testak.odt',
                        ['Test Case', '../Proiektua/Memoria-Eranskinak/2_1_8_1_test_kasuak.odt'],
                        ['Test Log', '../Proiektua/Memoria-Eranskinak/2_1_8_2_test_log.odt'],
                        ['Test Script', '../Proiektua/Memoria-Eranskinak/2_1_8_3_test_script.odt']
                        ]
                ],
                
                ['Tamaina eta esfortzu estimazioak', '../Proiektua/Memoria-Eranskinak/2_2_tamaina_esfortzu_estimazioak.odt'],
                
                ['Proiektuaren exekuzioa kudeatzeko plangintzak', '../Proiektua/Memoria-Eranskinak/2_3_plangintzak.odt',
				        ['Norainokoaren kudeaketa', '../Proiektua/Memoria-Eranskinak/2_3_1_norainokoak.odt'],
				        ['Epeen kudeaketa', '../Proiektua/Memoria-Eranskinak/2_3_2_epeak.odt'],
				        ['Proiektuko kostuen kudeaketa', '../Proiektua/Memoria-Eranskinak/2_3_3_kostu_kudeaketa.odt'],
				        ['Kalitatearen kudeaketa', '../Proiektua/Memoria-Eranskinak/2_3_4_kalitate_kudeaketa.odt'],
				        ['Giza baliabideen kudeaketa', '../Proiektua/Memoria-Eranskinak/2_3_5_giza_baliab_kudeaketa.odt'],
				        ['Komunikazioen kudeaketa', '../Proiektua/Memoria-Eranskinak/2_3_6_komunik_kudeaketa.odt'],
				        ['Arriskuen kudeaketa', '../Proiektua/Memoria-Eranskinak/2_3_7_arrisku_kudeaketa.odt'],
				        ['Erosketen kudeaketa', '../Proiektua/Memoria-Eranskinak/2_3_8_erosketen_kudeaketa.odt'],
                        ['Project Management', '../Proiektua/Memoria-Eranskinak/2_3_9_requisitos.odt',
                            ['Iteration Plan', '../Proiektua/Memoria-Eranskinak/2_2_3_3_especificacion-sistema.odt'],
                            ['Project Plan', '../Proiektua/Memoria-Eranskinak/2_2_3_7_requisitos-spftware.odt'],
                            ['Risk List', '../Proiektua/Memoria-Eranskinak/2_2_3_7_requisitos-spftware.odt'],
                            ['Work Items List', '../Proiektua/Memoria-Eranskinak/2_2_3_3_especificacion-sistema.odt']
                        ]
                ],
                
                ['Segurtasuna', '../Proiektua/Memoria-Eranskinak/2_10_seguridad.odt'],			

			],

            ['Sistemaren betekizunak','../Proiektua/Memoria-Eranskinak/2_2_especificacion-sistema.odt',
                ['Orokortasunak', '../Proiektua/Memoria-Eranskinak/2_2_1_generalidades.odt'],
                ['Edukia', '../Proiektua/Memoria-Eranskinak/2_2_2_contenido.odt'],
                ['Requirements', '../Proiektua/Memoria-Eranskinak/2_2_3_requisitos.odt',                   
                    ['Glossary', '../Proiektua/Memoria-Eranskinak/2_2_3_4_especificacion-sup.odt'],
                    ['Supporting Requirements Specification', '../Proiektua/Memoria-Eranskinak/2_2_3_7_requisitos-spftware.odt'],
                    ['Use-Case', '../Proiektua/Memoria-Eranskinak/2_2_3_7_requisitos-spftware.odt'],
                    ['Use-Case Models', '../Proiektua/Memoria-Eranskinak/2_2_3_7_requisitos-spftware.odt'],
                    ['Vision', '../Proiektua/Memoria-Eranskinak/2_2_3_3_especificacion-sistema.odt']
                ]
            ],
            ['Aurrekontua','../Proiektua/Memoria-Elaboracion/5_8_presupuesto.odt',
					['Orokortasunak', '../Proiektua/Memoria-Elaboracion/5_8_1_generalidades.odt'],
					['Edukia', '../Proiektua/Memoria-Elaboracion/5_8_2_contenidos.odt']
            ],
            ['Ikerlanak','../Proiektua/Memoria-Eranskinak/2_12_estudios-terceros.odt',
					['Orokortasunak', '../Proiektua/Memoria-Eranskinak/2_12_1_generalidades.odt'],
					['Edukia', '../Proiektua/Memoria-Eranskinak/2_12_2_contenido.odt']
            ]
			
	],			
			
];

 