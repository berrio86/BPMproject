/* --- menu items --- */
var TREE_ITEMS = [
	['Proyecto XX', null,
			['Azala', '../Proyecto/0_1_portada.doc'],
			['Aurkibide orokorra', '../Proyecto/0_2_indice.doc'],
			
			['Memoria','../Proyecto/Memoria/1_0_memoria.htm',
				['Identifikazio orriak', '../Proyecto/Memoria/1_1_resumen.doc'],
				['Sarrera', '../Proyecto/Memoria/1_2_introduccion.doc'],
				['Xedea', '../Proyecto/Memoria/1_3_objeto.doc'],
				['Aurrekariak', '../Proyecto/Memoria/1_4_antecedentes.doc'],
				['Egungo egoera', '../Proyecto/Memoria/1_5_situacion-actual.doc'],
			    ['Normak eta erreferentziak', '../Proyecto/Memoria/1_6_normas-referencias.doc',
                     ['<A HREF="../Proyecto/Memoria/1_6_normas-referencias.doc#Disposiciones_legales_y_normas_aplicadas" target="principal">Xedapen legalak eta aplikatutako normak</A>'],
                     ['Bibliografia', '../Proyecto/Memoria/1_6_6_bibliografia.doc'],
                     ['Metodoak, herramintak, ereduak, metrikak eta prototipoak', '../Proyecto/Memoria/1_6_2_metodos-recursos-desarrollo.doc'],
                     ['Proiektuaren idazketan zehar aplikatutako kalitate kudeaketa plana', '../Proyecto/Memoria/1_6_4_gestion-calidad.doc'],
                     ['Beste erreferentziak', '../Proyecto/Memoria/1_6_5_otras-referencias.doc']                     
                ],
				['Definizionak eta laburdurak', '../Proyecto/Memoria/1_7_def-abreviaturas.doc'],
				['Hasierako betekizunak', '../Proyecto/Memoria/1_8_requisitos-iniciales.doc'],
				['Norainokoa', '../Proyecto/Memoria/1_9_alcance.doc'],
				['Hipotesiak eta restrikzioak', '../Proyecto/Memoria/1_10_hipotesis-restricciones.doc'],
				['Aukeren ikerketa eta egingarritasuna', '../Proyecto/Memoria/1_11_alternativas-viabilidad.doc'],
				['Proposatutako sistemaren deskribapena', '../Proyecto/Memoria/1_12_solucion-propuesta.doc'],
                ['Arrisku analisia', '../Proyecto/Memoria/1_13_1_analisis-riesgos.doc'],
                ['Proiektuaren antolaketa eta kudeaketa', '../Proyecto/Memoria/1_13_2_organizacion-gestion.doc'],
                ['Denbora planifikazioa', '../Proyecto/Memoria/1_13_3_planificacion-temporal.doc'],
                ['Aurrekontua', '../Proyecto/Memoria/1_13_4_presupuesto.doc']
            ],
         

			['Eranskinak','../Proyecto/Memoria-Anexos/2_0_anexos-memoria.doc',
            
                ['Sistemaren analisi eta diseinua', '../Proyecto/Memoria-Anexos/2_4_analisis-diseño.doc',
                     ['Analisia: Sistemaren analisi ereduak', '../Proyecto/Memoria-Anexos/2_4_4_modelo-analisis.doc'],
                     ['Diseinua: Sistemaren arkitektura', '../Proyecto/Memoria-Anexos/2_4_3_arquitectura-software.doc'],
                     ['Diseinua: Funtzionalitate eredua', '../Proyecto/Memoria-Anexos/2_4_9_modelo-despliegue.doc'],
                     ['Diseinua: Interfaze eredua', '../Proyecto/Memoria-Anexos/2_4_7_modelo-diseño.doc'],
                     ['Diseinua: Datu eredua', '../Proyecto/Memoria-Anexos/2_4_8_modelo-datos.doc']                     
                ],
                
                ['Tamaina eta esfortzu estimazioak', '../Proyecto/Memoria-Anexos/2_10_seguridad.doc'],
                
                ['Proiektuaren exekuzioa kudeatzeko plangintzak', '../Proyecto/Memoria-Anexos/2_11_guias-construccion.doc',
				         ['Norainokoaren kudeaketa', '../Proyecto/Memoria-Anexos/2_11_1_conceptos.doc'],
				         ['Epeen kudeaketa', '../Proyecto/Memoria-Anexos/2_11_2_directrices.doc'],
				         ['Proiektuko kostuen kudeaketa', '../Proyecto/Memoria-Anexos/2_11_3_materiales-soporte.doc'],
				         ['Kalitatearen kudeaketa', '../Proyecto/Memoria-Anexos/2_11_4_documentacion.doc'],
				         ['Giza baliabideen kudeaketa', '../Proyecto/Memoria-Anexos/2_11_5_plantillas.doc'],
				         ['Komunikazioen kudeaketa', '../Proyecto/Memoria-Anexos/2_11_6_lista-comprobacion.doc'],
				         ['Arriskuen kudeaketa', '../Proyecto/Memoria-Anexos/2_11_7_ejemplos.doc'],
				         ['Erosketen kudeaketa', '../Proyecto/Memoria-Anexos/2_11_8_guias-herramientas.doc']
                ],
                
                ['Segurtasuna', '../Proyecto/Memoria-Anexos/2_10_seguridad.doc'],			

			],

            ['Sistemaren betekizunak','../Proyecto/Memoria-Anexos/2_2_especificacion-sistema.doc',
                ['Orokortasunak', '../Proyecto/Memoria-Anexos/2_2_1_generalidades.doc'],
                ['Edukia', '../Proyecto/Memoria-Anexos/2_2_2_contenido.doc'],
                ['Betekizunak', '../Proyecto/Memoria-Anexos/2_2_3_requisitos.doc',
                    ['Betekizun funtzionalak', '../Proyecto/Memoria-Anexos/2_2_3_3_especificacion-sistema.doc'],
                    ['Betekizun ez-funtzionalak', '../Proyecto/Memoria-Anexos/2_2_3_4_especificacion-sup.doc'],
                    ['Produktuaren betekizunak', '../Proyecto/Memoria-Anexos/2_2_3_7_requisitos-spftware.doc'],
                    ['Prozesuaren betekizunak', '../Proyecto/Memoria-Anexos/2_2_3_2_especificacion-sistema.doc'],
                    ['Metodologiaren araberako betekizunak', '../Proyecto/Memoria-Anexos/2_2_3_8_especificacion-requisitos.doc']
                ]
            ],
            ['Aurrekontua','../Proyecto/Memoria-Elaboracion/5_8_presupuesto.doc',
					['Orokortasunak', '../Proyecto/Memoria-Elaboracion/5_8_1_generalidades.doc'],
					['Edukia', '../Proyecto/Memoria-Elaboracion/5_8_2_contenidos.doc']
            ],
            ['Ikerlanak','../Proyecto/Memoria-Anexos/2_12_estudios-terceros.doc',
					['Orokortasunak', '../Proyecto/Memoria-Anexos/2_12_1_generalidades.doc'],
					['Edukia', '../Proyecto/Memoria-Anexos/2_12_2_contenido.doc']
            ]
			
	],			
			
];

 