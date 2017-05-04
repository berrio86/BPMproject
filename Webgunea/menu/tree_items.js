/* --- menu items --- */
var TREE_ITEMS = [
	['Proiektua XX', null,
			['Azala', '../Proiektua/0_1_azala.odt'],
			['Aurkibide orokorra', '../Proiektua/0_2_aurkibidea.odt'],
			
			['Memoria','../Proiektua/1_Memoria/1_0_memoria.htm',
				['Identifikazio orriak', '../Proiektua/1_Memoria/1_1_identifikazio_orriak.odt'],
				['Sarrera', '../Proiektua/1_Memoria/1_2_sarrera.odt'],
				['Xedea', '../Proiektua/1_Memoria/1_3_xedea.odt'],
				['Aurrekariak', '../Proiektua/1_Memoria/1_4_aurrekariak.odt'],
				['Egungo egoera', '../Proiektua/1_Memoria/1_5_egungo_egoera.odt'],
			    ['Arauak eta erreferentziak', '../Proiektua/1_Memoria/1_6_arauak_erreferentziak.odt',
                     ['<A HREF="../Proiektua/1_Memoria/1_6_arauak_erreferentziak.odt#Disposizio_legalak_eta_aplikatutako_arauak" target="nagusia">Xedapen legalak eta aplikatutako normak</A>'],
                     ['Bibliografia', '../Proiektua/1_Memoria/1_6_1_bibliografia.odt'],
                     ['Metodoak, herramintak, ereduak, metrikak eta prototipoak', '../Proiektua/1_Memoria/1_6_2_metodoak_tresnak_garapena.odt'],
                     ['Proiektuaren idazketan zehar aplikatutako kalitate kudeaketa plana', '../Proiektua/1_Memoria/1_6_3_kalitatearen_kudeaketa.odt'],
                     ['Beste erreferentziak', '../Proiektua/1_Memoria/1_6_4_beste_erreferentziak.odt']
                ],
				['Definizionak eta laburdurak', '../Proiektua/1_Memoria/1_7_def_laburdurak.odt'],
				['Hasierako betekizunak', '../Proiektua/1_Memoria/1_8_hasierako_betekizunak.odt'],
				['Norainokoa', '../Proiektua/1_Memoria/1_9_norainokoa.odt'],
				['Hipotesiak eta mugapenak', '../Proiektua/1_Memoria/1_10_hipotesiak_mugapenak.odt'],
				['Aukeren ikerketa eta egingarritasuna', '../Proiektua/1_Memoria/1_11_egingarritasuna.odt'],
				['Proposatutako sistemaren deskribapena', '../Proiektua/1_Memoria/1_12_proposatutako_sistema.odt'],
                ['Arrisku analisia', '../Proiektua/1_Memoria/1_13_arrisku_analisia.odt'],
                ['Proiektuaren antolaketa eta kudeaketa', '../Proiektua/1_Memoria/1_14_antolaketa_kudeaketa.odt'],
                ['Behin-behineko planifikazioa', '../Proiektua/1_Memoria/1_15_behin_behineko_planif.odt'],
                ['Aurrekontua', '../Proiektua/1_Memoria/1_16_aurrekontua.odt']
            ],
         

			['Eranskinak','../Proiektua/2_Memoria-Eranskinak/2_0_memoria_eranskinak.odt',
            
                ['Sistemaren analisi eta diseinua', '../Proiektua/2_Memoria-Eranskinak/2_1_analisia_diseinua.odt',
                    ['Analisia: Sistemaren analisi ereduak', '../Proiektua/2_Memoria-Eranskinak/2_1_1_analisi_ereduak.odt'],
                    ['Diseinua: Sistemaren arkitektura', '../Proiektua/2_Memoria-Eranskinak/2_1_2_arkitektura.odt'],
                    ['Diseinua: Funtzionalitate eredua', '../Proiektua/2_Memoria-Eranskinak/2_1_3_funtzionalitate_eredua.odt'],
                    ['Diseinua: Interfaze eredua', '../Proiektua/2_Memoria-Eranskinak/2_1_4_interfaze_eredua.odt'],
                    ['Diseinua: Datu eredua', '../Proiektua/2_Memoria-Eranskinak/2_1_5_datu_eredua.odt'],
                    ['Architecture', '../Proiektua/2_Memoria-Eranskinak/2_1_6_arkitektura.odt',
                        ['Architecture notebook', '../Proiektua/2_Memoria-Eranskinak/2_1_6_1_arkit_eskuliburua.odt']
                        ],
                    ['Development', '../Proiektua/2_Memoria-Eranskinak/2_1_7_garapena.odt',
                        ['Build', '../Proiektua/2_Memoria-Eranskinak/2_1_7_1_eraiketa.odt'],
                        ['Design', '../Proiektua/2_Memoria-Eranskinak/2_1_7_2_diseinua.odt'],
                        ['Developer Test', '../Proiektua/2_Memoria-Eranskinak/2_1_7_3_garapen_testak.odt'],
                        ['Implementation', '../Proiektua/2_Memoria-Eranskinak/2_1_7_4_inplementazioa.odt']
                        ],
                    ['Test', '../Proiektua/2_Memoria-Eranskinak/2_1_8_testak.odt',
                        ['Test Case', '../Proiektua/2_Memoria-Eranskinak/2_1_8_1_test_kasuak.odt'],
                        ['Test Log', '../Proiektua/2_Memoria-Eranskinak/2_1_8_2_test_log.odt'],
                        ['Test Script', '../Proiektua/2_Memoria-Eranskinak/2_1_8_3_test_script.odt']
                        ]
                ],
                
                ['Tamaina eta esfortzu estimazioak', '../Proiektua/2_Memoria-Eranskinak/2_2_tamaina_esfortzu_estimazioak.odt'],
                
                ['Proiektuaren exekuzioa kudeatzeko plangintzak', '../Proiektua/2_Memoria-Eranskinak/2_3_plangintzak.odt',
				        ['Norainokoaren kudeaketa', '../Proiektua/2_Memoria-Eranskinak/2_3_1_norainokoak.odt'],
				        ['Epeen kudeaketa', '../Proiektua/2_Memoria-Eranskinak/2_3_2_epeak.odt'],
				        ['Proiektuko kostuen kudeaketa', '../Proiektua/2_Memoria-Eranskinak/2_3_3_kostu_kudeaketa.odt'],
				        ['Kalitatearen kudeaketa', '../Proiektua/2_Memoria-Eranskinak/2_3_4_kalitate_kudeaketa.odt'],
				        ['Giza baliabideen kudeaketa', '../Proiektua/2_Memoria-Eranskinak/2_3_5_giza_baliab_kudeaketa.odt'],
				        ['Komunikazioen kudeaketa', '../Proiektua/2_Memoria-Eranskinak/2_3_6_komunik_kudeaketa.odt'],
				        ['Arriskuen kudeaketa', '../Proiektua/2_Memoria-Eranskinak/2_3_7_arrisku_kudeaketa.odt'],
				        ['Erosketen kudeaketa', '../Proiektua/2_Memoria-Eranskinak/2_3_8_erosketen_kudeaketa.odt'],
                        ['Project Management', '../Proiektua/2_Memoria-Eranskinak/2_3_9_proiektu_kudeaketa.odt',
                            ['Iteration Plan', '../Proiektua/2_Memoria-Eranskinak/2_3_9_1_iterazio_plana.odt'],
                            ['Project Plan', '../Proiektua/2_Memoria-Eranskinak/2_3_9_2_proiektu_plana.odt'],
                            ['Risk List', '../Proiektua/2_Memoria-Eranskinak/2_3_9_3_arrisku_zerrenda.odt'],
                            ['Work Items List', '../Proiektua/2_Memoria-Eranskinak/2_3_9_4_lan_item_zerrenda.odt']
                        ]
                ],
                
                ['Segurtasuna', '../Proiektua/2_Memoria-Eranskinak/2_4_segurtasuna.odt'],			

			],

            ['Sistemaren betekizunak','../Proiektua/3_Memoria-Betekizunak/3_0_sistema_betekizunak.odt',
                ['Orokortasunak', '../Proiektua/3_Memoria-Betekizunak/3_1_orokortasunak.odt'],
                ['Edukia', '../Proiektua/3_Memoria-Betekizunak/3_2_edukia.odt'],
                ['Requirements', '../Proiektua/3_Memoria-Betekizunak/3_3_betekizunak.odt',                   
                    ['Glossary', '../Proiektua/3_Memoria-Betekizunak/3_3_1_glosategia.odt'],
                    ['Supporting Requirements Specification', '../Proiektua/3_Memoria-Betekizunak/3_3_2_eskakizun_laguntzaileen_espezifikazioa.odt'],
                    ['Use-Case', '../Proiektua/3_Memoria-Betekizunak/3_3_3_erabilpen_kasuak.odt'],
                    ['Use-Case Models', '../Proiektua/3_Memoria-Betekizunak/3_3_4_erabilpen_kasuak_ereduak.odt'],
                    ['Vision', '../Proiektua/3_Memoria-Betekizunak/3_3_5_ikusmena.odt']
                ]
            ],
            ['Aurrekontua','../Proiektua/4_Memoria-Aurrekontua/4_0_aurrekontua.odt',
					['Orokortasunak', '../Proiektua/4_Memoria-Aurrekontua/4_1_orokortasunak.odt'],
					['Edukia', '../Proiektua/4_Memoria-Aurrekontua/4_2_edukia.odt']
            ],
            ['Besteen Ikerlanak','../Proiektua/5_Memoria-Besteak/5_0_besteen_ikerlanak.odt',
					['Orokortasunak', '../Proiektua/5_Memoria-Besteak/5_1_orokortasunak.odt'],
					['Edukia', '../Proiektua/5_Memoria-Besteak/5_2_edukia.odt']
            ]
			
	],			
			
];

 