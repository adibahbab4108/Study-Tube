const departments = [
  {
    name: "CSE",
    semesters: [
      {
        number: 1,
        courses: [
          {
            courseId: 1,
            name: "Computer Programming I",
            playlistId: [],
          },
          {
            courseId: 2,
            name: "Basic Electrical Engineering",
            playlist: [],
          },
          {
            courseId: 3,
            name: "Mathematics I (Differential and Integral Calculus)",
            playlist: [],
          },
          // More courses...
        ],
      },
      {
        number: 2,
        courses: [
          {
            courseId: 1,
            name: "Computer Programming II",
            playlistId: "xyz123",
          },
          {
            courseId: 2,
            name: "Discrete Mathematics",
            playlistId: "xyz123",
          },
          // More courses...
        ],
      },
      {
        number: 3,
        courses: [
          {
            courseId: 1,
            name: "Data Structures",
            playlistId: "xyz123",
          },
          {
            courseId: 2,
            name: "Digital Logic Design",
            playlistId: "xyz123",
          },
          {
            courseId: 3,
            name: "Software Development I",
            playlistId: "xyz123",
          },
          // More courses...
        ],
      },
      {
        number: 4,
        courses: [
          {
            courseId: 1,
            name: "Algorithm",
            playlist: [
              {
                id: 1,
                title: "1. Introduction to Algorithms",
                url: "https://youtu.be/0IAPZzGSbME?si=s5LXMrwkN8w7L66k",
              },
              {
                id: 2,
                title: "1.1 Priori Analysis and Posteriori Testing",
                url: "https://youtu.be/-JTq1BFBwmo?si=tKPt85Dl7_hjhK7p",
              },
              {
                id: 3,
                title: "1.2 Characteristics of Algorithm",
                url: "https://youtu.be/FbYzBWdhMb0?si=qBgd4XaVfsyqRjKg",
              },
              {
                id: 4,
                title: "1.3 How Write and Analyze Algorithm",
                url: "https://youtu.be/xGYsEqe9Vl0?si=bwyq60IiCu6tIjBK",
              },
              {
                id: 5,
                title: "1.4 Frequency Count Method",
                url: "https://youtu.be/1U3Uwct45IY?si=_USjCfXHDeMU3Ny7",
              },
              {
                id: 6,
                title: "1.5.1 Time Complexity #1",
                url: "https://youtu.be/9TlHvipP5yA?si=NPCLDonSQJkmqN90",
              },
              {
                id: 7,
                title: "1.5.2 Time Complexity Example #2",
                url: "https://youtu.be/9SgLBjXqwd4?si=FD-u9S3xFzXcb_pi",
              },
              {
                id: 8,
                title: "1.5.3 Time Complexity of While and if #3",
                url: "https://youtu.be/p1EnSvS3urU?si=Om1DaXbOoo0TW3Ha",
              },
              {
                id: 9,
                title: "1.6 Classes of functions",
                url: "https://youtu.be/w7t4_JUUTeg?si=v1KghtYZ3W4dzrxJ",
              },
              {
                id: 10,
                title: "1.7 Compare Class of Functions",
                url: "https://youtu.be/5v-tKX2uRAk?si=bNhrucTgEUNFZ2lF",
              },
              {
                id: 11,
                title: "1.8.1 Asymptotic Notations Big Oh - Omega - Theta #1",
                url: "https://youtu.be/A03oI0znAoc?si=Pv12jY9o5qFFUbWa",
              },
              {
                id: 12,
                title: "1.8.2 Asymptotic Notations - Big Oh - Omega - Theta #2",
                url: "https://youtu.be/Nd0XDY-jVHs?si=jVcMiue1qvJG1lWW",
              },
              {
                id: 13,
                title: "1.9 Properties of Asymptotic Notations",
                url: "https://youtu.be/NI4OKSvGAgM?si=KymmMmqz-l-Ph_4r",
              },
              {
                id: 14,
                title: "1.10.1 Comparison of Functions #1",
                url: "https://youtu.be/mwN18xfwNhk?si=5dKO_ICysjwVSipk",
              },
              {
                id: 15,
                title: "1.10.2 Comparison of Functions #2",
                url: "https://youtu.be/WlBBTSL0ZRc?si=2Ur1iNxtz7Rwny9g",
              },
              {
                id: 16,
                title: "1.11 Best Worst and Average Case Analysis",
                url: "https://youtu.be/lj3E24nnPjI?si=Dcg8Wb_f6mbQpxAe",
              },
              {
                id: 17,
                title:
                  "1.12 Disjoint Sets Data Structure - Weighted Union and Collapsing Find",
                url: "https://youtu.be/wU6udHRIkcc?si=fMXV3wVZhgNVlHww",
              },
              {
                id: 18,
                title: "2 Divide And Conquer",
                url: "https://youtu.be/2Rr2tW9zvRg?si=HfeQC-hcFC2RyWrn",
              },
              {
                id: 19,
                title: "2.1.1 Recurrence Relation (T(n)= T(n-1) + 1) #1",
                url: "https://youtu.be/4V30R3I1vLI?si=pXq8uP1JNSlL0gyR",
              },
              {
                id: 20,
                title: "2.1.2 Recurrence Relation (T(n)= T(n-1) + n) #2",
                url: "https://youtu.be/IawM82BQ4II?si=RE9iPSX-cIjsnQN0",
              },
            ],
          },
          {
            courseId: 2,
            name: "Theory of computation",
            playlist: [
              {
                id: 1,
                title:
                  "Theory of computation Bangla tutorial 0 : Introduction to Theory of Computation",
                url: "https://youtu.be/O_FWltVBwQM?si=uYXezqCJn6NaqgNi",
              },
              {
                id: 2,
                title:
                  "Theory of computation Bangla tutorial 1 : Symbol, Aphabet & String",
                url: "https://youtu.be/ODat55vXY80?si=7dLT-rPFvgA8tP_S",
              },
              {
                id: 3,
                title: "Theory of computation Bangla tutorial 2 : Language",
                url: "https://youtu.be/YBt8Ek0aHUI?si=fE9hvzffVp7CIOWV",
              },
              {
                id: 4,
                title:
                  "Theory of computation Bangla tutorial 3 : Finite automaton",
                url: "https://youtu.be/VNN7R8nBK5U?si=D59a8BCKgfCPIQri",
              },
              {
                id: 5,
                title:
                  "Theory of computation Bangla tutorial 4 : Introduction to DFA",
                url: "https://youtu.be/mJIoLbm8jbA?si=lJwygULSI1VFXWmN",
              },
              {
                id: 6,
                title:
                  "Theory of computation Bangla tutorial 5 : Formal definition of DFAs",
                url: "https://youtu.be/jyhNwYS3De0?si=IR__iHJ4CXtyDcaK",
              },
              {
                id: 7,
                title:
                  "Theory of computation Bangla tutorial 6 : DFA of strings which starts with a",
                url: "https://youtu.be/ZM8j9lIlM5A?si=jTfrnk98ewxFO5pP",
              },
              {
                id: 8,
                title:
                  "Theory of computation Bangla tutorial 7 : DFA of strings which starts with aa",
                url: "https://youtu.be/1CKYbTmz6BY?si=Q0nuckqLyUsW99rb",
              },
              {
                id: 9,
                title:
                  "Theory of computation Bangla tutorial 8 : DFA of strings which starts with aab",
                url: "https://youtu.be/gTtVPGaXORE?si=_WiTXYyxczuXOxoD",
              },
              {
                id: 10,
                title:
                  "Theory of computation Bangla tutorial 9 : DFA of strings which starts with 10",
                url: "https://youtu.be/OGPOR4mat2U?si=HNGSo2zkfxsnJ-Dh",
              },
              {
                id: 11,
                title:
                  "Theory of computation Bangla tutorial 10 : DFA of strings contains a",
                url: "https://youtu.be/NXmY1uFDwl0?si=pNH37F3hXn-xzcaH",
              },
              {
                id: 12,
                title:
                  'Theory of computation Bangla tutorial 11 : DFA of strings which contains "ab"',
                url: "https://youtu.be/cU9A9B1SUdg?si=_lQugzTxx_4adkrR",
              },
              {
                id: 13,
                title:
                  'Theory of computation Bangla tutorial 12 : DFA of strings which contains "001" as substring',
                url: "https://youtu.be/-S0rMDQqxGs?si=NOX06JNPOKR-IMUG",
              },
              {
                id: 14,
                title:
                  'Theory of computation Bangla tutorial 13 : DFA of strings which contains "baba" as substring',
                url: "https://youtu.be/exFOaRqW5Ps?si=PCOvCf6dkUjLXa1u",
              },
              {
                id: 15,
                title:
                  "Theory of computation Bangla tutorial 14 : DFA of strings which ends with an a",
                url: "https://youtu.be/qbwYuH2GcOg?si=29lx6ywhAYb95kWj",
              },
              {
                id: 16,
                title:
                  'Theory of computation Bangla tutorial 15 : DFA of strings which ends with an "ab"',
                url: "https://youtu.be/wfoDl8irxSg?si=0EMlL69ljQXEpbNn",
              },
              {
                id: 17,
                title:
                  "Theory of computation Bangla tutorial 16 : staring and ending with different symbol",
                url: "https://youtu.be/kZB2rMGvQHY?si=4_smTslRsuYqfFD9",
              },
              {
                id: 18,
                title:
                  "Theory of computation Bangla tutorial 17 : staring and ending with same symbol",
                url: "https://youtu.be/J_URe9dZlz8?si=NJ3CLXo_9wljf1rR",
              },
              {
                id: 19,
                title:
                  "Theory of computation Bangla tutorial 18 : every a is followed by b",
                url: "https://youtu.be/2-N4bIhhS5U?si=ezZKmmOefQd2DtYn",
              },
              {
                id: 20,
                title:
                  "Theory of computation Bangla tutorial 19 : every a is never be followed by b",
                url: "https://youtu.be/KiKtpGLnOyE?si=y0lJ8bg_mTLF5Jgd",
              },
              //export from {Anisul Islam}
            ],
          },
          {
            courseId: 3,
            name: "Database Management System",
            playlist: [
              {
                id: 1,
                title:
                  "Lec-1: DBMS Syllabus for GATE, UGCNET, NIELIT, DSSSB etc.",
                url: "https://youtu.be/kBdlM6hNDAE?si=B6p8TeUljxzH4qVl",
              },
              {
                id: 2,
                title:
                  "Lec-2: Introduction to DBMS (Database Management System) With Real life examples | What is DBMS",
                url: "https://youtu.be/3EJlovevfcA?si=tPokqQe83chH42dn",
              },
              {
                id: 3,
                title:
                  "Lec-3: File System vs DBMS | Disadvantages of File System | DBMS Advantages",
                url: "https://youtu.be/ZtVw2iuFI2w?si=xJA8c4d_xzjkOnjK",
              },
              {
                id: 4,
                title:
                  "Lec-4: 2 tier and 3 tier Architecture with real life examples",
                url: "https://youtu.be/VyvTabQHevw?si=2m9U4QXBch-mz4VG",
              },
              {
                id: 5,
                title: "Lec-5: What is Schema | How to define Schema",
                url: "https://youtu.be/pDX4NR4eY3A?si=pS8mjIZGrABSNyzF",
              },
              {
                id: 6,
                title:
                  "Lec-6: Three Schema Architecture | Three Level of Abstraction",
                url: "https://youtu.be/5fs1ldO6B5c?si=E3-73mt7eJdUzuZf",
              },
              {
                id: 7,
                title:
                  "Lec-7: What is Data Independence | Logical vs. Physical Independence | DBMS",
                url: "https://youtu.be/upUSGUSK5k0?si=JJ0zCT77hbKBXD3t",
              },
              {
                id: 8,
                title:
                  "Lec-8.0: Integrity Constraints in Database with Examples",
                url: "https://youtu.be/YTJdBA9wZro?si=pFxZBQHFqqFyHLij",
              },
              {
                id: 9,
                title:
                  "Lec-8: What is CANDIDATE KEY and PRIMARY key | Full Concept | Most suitable examples",
                url: "https://youtu.be/mMxjKFiIKxs?si=sMqlB8oMGxsgg8Z2",
              },
              {
                id: 10,
                title:
                  "Lec-9: What is Primary Key in DBMS | Primary Key with Examples",
                url: "https://youtu.be/Tp37HXfekNo?si=G8VQiuXV1FCOEWSV",
              },
              {
                id: 11,
                title:
                  "Lec-10: Foreign Key in DBMS | Full Concept with examples",
                url: "https://youtu.be/UyqpQ3D2yCw?si=QC9OV-x7kdWB9WKZ",
              },
              {
                id: 12,
                title:
                  "Lec-11: Insert, Update & Delete from Foreign Key table | Referential Integrity",
                url: "https://youtu.be/DM2lAomoDrg?si=4zZ8xC-DYHNZZZRC",
              },
              {
                id: 13,
                title: "Lec-12: Question on Foreign Key",
                url: "https://youtu.be/KknAgz0xGSU?si=fNlPS1q93gynA0FT",
              },
              {
                id: 14,
                title: "Lec-13: Super key in DBMS",
                url: "https://youtu.be/QQqGfScdlzA?si=KluIEqRcGIbJ8cJs",
              },
              {
                id: 15,
                title: "Lec-14: Introduction to ER model",
                url: "https://youtu.be/gbVev8RuZLg?si=nY0N7-Bn2bCWo-4Q",
              },
              {
                id: 16,
                title: "Lec-15: Types of Attributes in ER Model",
                url: "https://youtu.be/WEo3g6Ir-vA?si=HU93mS8YuaGc2-d9",
              },
              {
                id: 17,
                title: "Lec-16: One to One relationship in DBMS",
                url: "https://youtu.be/s6MH7f3SnsY?si=nf6pJQcuE3yhjbVf",
              },
              {
                id: 18,
                title: "Lec-17: One to Many Relationship in DBMS",
                url: "https://youtu.be/rZxETdO_KUQ?si=j-Dg2C6gcQPN3NpG",
              },
              {
                id: 19,
                title: "Lec-18: Many to Many Relationship in DBMS",
                url: "https://youtu.be/onR_sLhbZ4w?si=ORALREwrZM1pZXyQ",
              },
              {
                id: 20,
                title: "Lec-19:Question on Minimize tables in ER Model",
                url: "https://youtu.be/Nxdq8RZ7Ayg?si=oxlh6bR7NJQeUVgg",
              },
              //Gate Smashers
            ],
          },
          {
            courseId: 4,
            name: "Accounting",
            playlist: [
              {
                id: 1,
                title: "ACCOUNTING BASIC RULE (BANGLA)",
                url: "https://youtu.be/an913DPArrU?si=_F0O7jHQcQFur6qU",
              },
              {
                id: 2,
                title: "ACCOUNTING TRANSACTION/TABULAR ANALYSIS",
                url: "https://youtu.be/0IMFxZnXkqc?si=I_3YvyNUyt794vJf",
              },
              {
                id: 3,
                title: "ACCOUNTING TRANSACTION/TABULAR ANALYSIS PROBLEM-2",
                url: "https://youtu.be/_MaP_fivYRE?si=PfLe6EI58Ent9sQV",
              },
              {
                id: 4,
                title: "ACCOUNTING TRANSACTION/TABULAR ANALYSIS PROBLEM-3",
                url: "https://youtu.be/_63kR4-tL3E?si=ZhLWR1bOKJMWXdYf",
              },
              {
                id: 5,
                title:
                  "Accounting Income statement / Owners equity statement / Balance sheet",
                url: "https://youtu.be/GeBaYkbYsiM?si=9lHXuXa1Cq06WB3U",
              },
              {
                id: 6,
                title:
                  "Accounting General Journal Rules With Shortcut technique",
                url: "https://youtu.be/DOKfMiGHkkM?si=pGlzHitrXDAS1DwY",
              },
              {
                id: 7,
                title: "Accounting General Journal with proper explanation",
                url: "https://youtu.be/KgVK0wwHdB4?si=7c7_VeoUSozjX-b6",
              },
              {
                id: 8,
                title: "Accounting Journal to Ledger with proper explanation",
                url: "https://youtu.be/StIrTITy-L0?si=MfTSmkQlS4Rn33Ss",
              },
              {
                id: 9,
                title:
                  "Accounting - How to prepare Trial Balance with proper explanation",
                url: "https://youtu.be/OAPk1QLifVw?si=7sIJOdF4gdmN-NzK",
              },
              {
                id: 10,
                title: "Adjusting Entries in Accounting",
                url: "https://youtu.be/T1kEBffcVsQ?si=JCgzrlJJxwWqsqMX",
              },
              {
                id: 11,
                title: "CVP (Cost volume profit) rules remember with technique",
                url: "https://youtu.be/X8tR5hXlf8c?si=f9mke7Cpb6LXqqtv",
              },
              {
                id: 12,
                title:
                  "CVP (Cost Volume Profit ) Analysis Example -01 Solve in Bangla.",
                url: "https://youtu.be/176Al4BrL5E?si=kO-_XeGNOm9u1reE",
              },
              {
                id: 13,
                title:
                  "CVP (Cost Volume Profit ) Analysis Example -02 Solve in Bangla.",
                url: "https://youtu.be/OQxhcHoBsqg?si=DgtNs7gnTREUCPqo",
              },
              {
                id: 14,
                title: "Cost Sheet Rules",
                url: "https://youtu.be/dBmuyTzJzlE?si=VC9mUB_95uaCKZ41",
              },
              {
                id: 15,
                title: "Cost Sheet Problem Solve",
                url: "https://youtu.be/gL0qev67jVc?si=0iMazViYxZe6GaHJ",
              },
              //Networking Pro
            ],
          },
          // More courses...
        ],
      },
      {
        number: 5,
        courses: [
          {
            courseId: 1,
            name: "Compiler",
            playlist: [
              {
                id: 1,
                title: "(LEC-1) Introduction to Compiler",
                url: "https://youtu.be/Q3TOuSnKDwo?si=cyTBxZzbNKaX_Fce",
              },
              {
                id: 2,
                title: "(LEC-2) Compiler Phases",
                url: "https://youtu.be/u81x43idJjs?si=iekRLqFtI5_GZz86",
              },
              {
                id: 3,
                title: "(LEC-3) Lexical Analysis",
                url: "https://youtu.be/OBgVvWbhIfU?si=TFLWAikEN_tw6Opp",
              },
              {
                id: 4,
                title: "(LEC-4) How to Count Number of Tokens?",
                url: "https://youtu.be/oWWTZ7-bFk4?si=NDuGG5Iu2grhMWtM",
              },
              {
                id: 5,
                title: "(LEC-5) FIRST Set in Syntax Analysis",
                url: "https://youtu.be/KYtPUbqPWWs?si=k4sYZJcIaGz1tfxl",
              },
              {
                id: 6,
                title: "(LEC-6) FOLLOW Set in Syntax Analysis",
                url: "https://youtu.be/zQiKUaudDVU?si=5gD82H-QrFC9yw5Z",
              },
              {
                id: 7,
                title: "(LEC-7) First and Follow",
                url: "https://youtu.be/smy4Kqs2tlA?si=b7tHhhJ5TOOYWbws",
              },
              {
                id: 8,
                title: "(LEC-8) Syntax Analysis",
                url: "https://youtu.be/E8FLtc2t9zY?si=bayM_3OPs28o-SDQ",
              },
              {
                id: 9,
                title: "(LEC-9) Types of Parser",
                url: "https://youtu.be/9iPZAoALGeY?si=EP34CSvxKXAA1cEZ",
              },
              {
                id: 10,
                title: "(LEC-10) How to Construct LL(1) Parsing Table?",
                url: "https://youtu.be/5E65pM89G1Y?si=xH3aVNDA9rO7qcnK",
              },
              {
                id: 11,
                title:
                  "(LEC-11) How LL(1) Parser decides whether a string is accepted or rejected?",
                url: "https://youtu.be/O_RDrEwvPpE?si=NFazSLQVRRVB3ilF",
              },
              {
                id: 12,
                title: "(LEC-12) LR(0) Parsing",
                url: "https://youtu.be/MJYI8gfaU1A?si=wyljD1azQSP_pmm2",
              },
              {
                id: 13,
                title: "(LEC-13) Question on LR(0) Parsing",
                url: "https://youtu.be/zWe7eHv1YNk?si=zD-FMkh3RkbpE77G",
              },
              {
                id: 14,
                title: "(LEC-14) SLR (1) Parsing Table",
                url: "https://youtu.be/XwdMF7yhaPc?si=957df0a39eQKCHH8",
              },
              {
                id: 15,
                title: "(LEC-15) Question on SLR (1) Parsing",
                url: "https://youtu.be/FUA763ynjkI?si=zEO7tSa0qJX0GQZp",
              },
              {
                id: 16,
                title: "(LEC-16) CLR (1) Parsing",
                url: "https://youtu.be/xmLlp_bWN6c?si=bRlY4QH9pbM2mAmB",
              },
              {
                id: 17,
                title: "(LEC-17) Imp. Question on CLR(1) Parsing",
                url: "https://youtu.be/DeHcFV4HL_o?si=xkQns75BsdEyoZ-E",
              },
              {
                id: 18,
                title: "(LEC-18) LALR Parser (with Examples)",
                url: "https://youtu.be/mluRR4JMQHo?si=MRZWrCMdDlNQpDG-",
              },
              {
                id: 19,
                title: "(LEC-19) Elimination of Left Recursion",
                url: "https://youtu.be/N8IPtVSkRdM?si=IaA1xwvisS6qnp2F",
              },
              {
                id: 20,
                title: "(LEC-20) Semantic Analysis",
                url: "https://youtu.be/GXKT0ZP_wFw?si=rT_q1Sjxu8KZnxRa",
              },
              //Lecturelia
            ],
          },
          {
            courseId: 2,
            name: "Computer Architecture",
            playlist: [
              {
                id: 1,
                title: "Topic 01 - Introduction to Computer Architecture",
                url: "https://youtu.be/KOVcfjnFLfE?si=RjD0qpNli_E_zRv8",
              },
              {
                id: 2,
                title: "Topic 02 - Brief History",
                url: "https://youtu.be/iULprXsGqt4?si=IMynKTBxXHVjjavK",
              },
              {
                id: 3,
                title: "Topic 3_1 Computer Performance",
                url: "https://youtu.be/P_z4wB8a1A0?si=jbNdrWn0DabTydcf",
              },
              {
                id: 4,
                title: "Topic 3_2 Computer Performance",
                url: "https://youtu.be/ATqXCmsLYds?si=zhHCPDo7bpJ3NRfA",
              },
              {
                id: 5,
                title: "Topic 3_4 Computer Performance | Pitfall and Fallacies",
                url: "https://youtu.be/9pRlNzk2zno?si=cd27NK9V4qPx3PNn",
              },
              {
                id: 6,
                title: "Topic 3_3 Computer Performance",
                url: "https://youtu.be/3pOru4j6Iwo?si=7EXoVVB87gildPow",
              },
              {
                id: 7,
                title: "Topic 4_1 Components",
                url: "https://youtu.be/oODqVF7msX0?si=Je3cbaW8DfOuZlzd",
              },
              {
                id: 8,
                title: "Topic 4_2 Bus Interconnections",
                url: "https://youtu.be/hoO0tVv63N0?si=MMv7j4j9OuFWA7rn",
              },
              {
                id: 9,
                title: "Topic 5 Instruction Set and Addressing Mode",
                url: "https://youtu.be/NbyYF0aPHX8?si=J7jBExrjQut0EHmq",
              },
              {
                id: 10,
                title: "Topic 6_1 Execution Unit",
                url: "https://youtu.be/3MChyIiQbNk?si=Mck0O-BwbBSADJv8",
              },
              {
                id: 11,
                title: "Topic 6_2 Execution Unit | Ripple Carry Adder",
                url: "https://youtu.be/O09FREH3md4?si=VNhiu6zn3kuxbOK0",
              },
              {
                id: 12,
                title: "Topic 6_3 Execution Unit | Carry Look Ahead Adder",
                url: "https://youtu.be/LkCSHv5HJFs?si=hJS7pW2_QjIgjVVk",
              },
              {
                id: 13,
                title: "Topic 6_4 Execution Unit | ALU Design",
                url: "https://youtu.be/rsAMkymG3uc?si=5zILMbhDfD-HawLf",
              },
              {
                id: 14,
                title: "Topic 6_5 Execution Unit | Multiplication",
                url: "https://youtu.be/QoEsSwncUY0?si=kWKEjzLTzF76vYNH",
              },
              {
                id: 15,
                title:
                  "Topic 7_1 Instruction Pipeline | Data and Resource Hazard",
                url: "https://youtu.be/0uzz7s8I-1c?si=G5jx8IxiSjo0asLw",
              },
              {
                id: 16,
                title: "Topic 7_2 Instruction Pipeline | Branch Hazard",
                url: "https://youtu.be/EKpQSDiJF4A?si=L8MEviZwSiDLDZNw",
              },
              {
                id: 17,
                title: "Topic 8_1 Memory | Memory Hierarchy",
                url: "https://youtu.be/Whrj9u-to30?si=4GPos-bUAz64TQaK",
              },
              {
                id: 18,
                title: "Topic 8_2 Cache Memory | Direct Cache Mapping",
                url: "https://youtu.be/IUKJSfqj_B4?si=SjV-r9MBhOWB7oKG",
              },
              {
                id: 19,
                title:
                  "Topic 8_3 Cache | Fully Associative Cache Mapping | Set Associative Cache Mapping",
                url: "https://youtu.be/qSq5FpPt90E?si=AS3lvtT71DeUZwch",
              },
              {
                id: 20,
                title: "Topic 9 Virtual Memory",
                url: "https://youtu.be/Eyw4F1mDvsU?si=uF-Njvr0ON4UarVB",
              },
              //Rhythm Synthesis
            ],
          },
          {
            courseId: 3,
            name: "Internet Tools & Technology",
            playlist: [
              {
                id: 1,
                title:
                  "javascript bangla tutorial 1 : The Ultimate JavaScript Roadmap 2023",
                url: "https://youtu.be/xpP5L1NuMQU?si=qXPh_Onkn5DkWfcq",
              },
              {
                id: 2,
                title:
                  "javascript bangla tutorial 2 : how to show output in JavaScript",
                url: "https://youtu.be/fBhxs9OHxtY?si=Qy5_u2TTQCNLKLNR",
              },
              {
                id: 3,
                title:
                  "javascript bangla tutorial 3 : how to add JavaScript in html",
                url: "https://youtu.be/HvpmqQ53Rjw?si=vqtigTfxY1lIVger",
              },
              {
                id: 4,
                title:
                  "javascript bangla tutorial 4 : Keyword, Data Type and comment",
                url: "https://youtu.be/7AA6H_NBiL0?si=OsxrCXD_ZOAM0nre",
              },
              {
                id: 5,
                title:
                  "javascript bangla tutorial 5 : how to declare variables in JavaScript",
                url: "https://youtu.be/9fLfvLAIajA?si=k0QdJRKBJGoQqyXw",
              },
              {
                id: 6,
                title:
                  "javascript bangla tutorial 6 : number method | toFixed | toPrecision",
                url: "https://youtu.be/uBEKIMJx50E?si=MNyQvwrBTRJeyJT5",
              },
              {
                id: 7,
                title:
                  "javascript bangla tutorial 7 : how to add or concatenate strings",
                url: "https://youtu.be/S09l_YSOp80?si=oBKLtxCeqmFGUcIT",
              },
              {
                id: 8,
                title:
                  "javascript bangla tutorial 8 : Library functions for string",
                url: "https://youtu.be/w-HOpmckKF8?si=jvZJlRxthwaJ77oo",
              },
              {
                id: 9,
                title:
                  "javascript bangla tutorial 9 : Arithmetic and assignment operator",
                url: "https://youtu.be/edlzr3HeGx0?si=jYAK7vdpKobvBsNv",
              },
              {
                id: 10,
                title:
                  "javascript bangla tutorial 10 : Make your own calculator",
                url: "https://youtu.be/CFFT5GJlII4?si=MIoYXPWCRoJ4IHPh",
              },
              {
                id: 11,
                title: "javascript bangla tutorial 11 : Area of various shapes",
                url: "https://youtu.be/xmtxXGZQzL4?si=w_fomG_v-eZoJbay",
              },
              {
                id: 12,
                title:
                  "javascript bangla tutorial 12 : how to make temperature converter",
                url: "https://youtu.be/U9-II7kPs0Q?si=8i5XX2avuuBuYD-c",
              },
              {
                id: 13,
                title:
                  "javascript bangla tutorial 13 : Relational and Logical Operator",
                url: "https://youtu.be/VKYdMMnamb4?si=d9GfqAi-ub8WqNS1",
              },
              {
                id: 14,
                title: "javascript bangla tutorial 14 : if, else if, else",
                url: "https://youtu.be/WRZMV63mUhg?si=TuozKNIX2BBiZZS2",
              },
              {
                id: 15,
                title: "javascript bangla tutorial 15 : Letter Grade Program",
                url: "https://youtu.be/YtbTJqFyLkY?si=viWhjrgEAnS6DVmx",
              },
              {
                id: 16,
                title:
                  "javascript bangla tutorial 16 : programs using logical operators",
                url: "https://youtu.be/KEmFLpv_wPw?si=NETeyx0zNJR74r_k",
              },
              {
                id: 17,
                title: "javascript bangla tutorial 17 : switch",
                url: "https://youtu.be/AeSO96P0RMs?si=Rdy-2rVdSPoaImOd",
              },
              {
                id: 18,
                title:
                  "javascript bangla tutorial 18 : how to use for loop in javascript (part-1)",
                url: "https://youtu.be/niQQ5qB4WRA?si=RxNiHXrjnNt1jz8f",
              },
              {
                id: 19,
                title:
                  "javascript bangla tutorial 19 : how to use for loop in javascript (part-2)",
                url: "https://youtu.be/ZFDjaO0klMw?si=1IVHLr9OmkmcfKol",
              },
              {
                id: 20,
                title:
                  "javascript bangla tutorial 20 : how to use while loop in javascript",
                url: "https://youtu.be/gKHjlhd-jyU?si=O8kGGP5zpuu56TgD",
              },
              //Anisul Islam
            ],
          },
          {
            courseId: 4,
            name: "Electrical Drive & Documentation",
            playlist: [
              {
                id: 1,
                title: "01.DC Circuit Basic Class -01",
                url: "https://youtu.be/0dFKVO_5L5A?si=qDYFPrtFTqFp0mGK",
              },
              {
                id: 2,
                title: "02.DC Circuit Basic Class-02",
                url: "https://youtu.be/WfHLMF7HHEU?si=soOz0gjuALMXE4TC",
              },
              {
                id: 3,
                title: "03.DC Circuit Basic Class-03",
                url: "https://youtu.be/jncWsqa6kro?si=hld-AJdrmVTbkqby",
              },
              {
                id: 4,
                title: "04.DC Circuit Math Class-01 (with practical resistor)",
                url: "https://youtu.be/z1j5YjgoXq4?si=IqsPBDDk9ZC7TJQP",
              },
              {
                id: 5,
                title: "05.DC Circuit Math Class-02 । Point Method",
                url: "https://youtu.be/Lo9lN8_QQ34?si=5XPlV8hvYTDZZiyB",
              },
              {
                id: 6,
                title: "06.DC Circuit Math Class-03",
                url: "https://youtu.be/efkuGw_eo7A?si=QKvegg01RDgjVqh5",
              },
              {
                id: 7,
                title: "07.DC Circuit Math Class-04",
                url: "https://youtu.be/1or-Boe2BuA?si=_BJUEYdFyrlch9Xl",
              },
              {
                id: 8,
                title: "08.DC Circuit Math Class-05",
                url: "https://youtu.be/ps6l8lyWCbk?si=HSzaLXIt2s1rOsZb",
              },
              {
                id: 9,
                title: "09.DC Circuit Math Class-06",
                url: "https://youtu.be/KJWDcrQMiJY?si=BMrD1MNtBERYZMAd",
              },
              {
                id: 10,
                title: "10.DC Circuit Math Class-07",
                url: "https://youtu.be/3MV4MB-71jI?si=VTT2BUzRkw0TMhTe",
              },
              {
                id: 11,
                title: "11.DC Circuit Math Class-08",
                url: "https://youtu.be/SJM-WG25UOI?si=Mt9mmk_gMI1KA3-8",
              },
              {
                id: 12,
                title: "12.DC Circuit Math Class-09",
                url: "https://youtu.be/xZxsBYJEy1w?si=71c0TRVb5KqWQRIw",
              },
              {
                id: 13,
                title: "13.DC Circuit Math Class-10",
                url: "https://youtu.be/oeFbrKsOEqk?si=64gUtrQF1qgMT75H",
              },
              {
                id: 14,
                title: "14.DC Circuit Math Class-11",
                url: "https://youtu.be/0vla7xAUE0E?si=paWtpf3VoKJv2GpN",
              },
              {
                id: 15,
                title: "15.DC Circuit Math Class-12",
                url: "https://youtu.be/1y9VsIQEE5M?si=9lB4_dJTOZQWRb3l",
              },
              {
                id: 16,
                title: "16. DC Circuit (KVL) Math Class-13",
                url: "https://youtu.be/zQAj5c1emJc?si=dlRCHdIa2OxzXCJ9",
              },
              {
                id: 17,
                title: "17. DC Circuit (KVL) Math Class-14",
                url: "https://youtu.be/J-FVLnOZtF8?si=qsq26wKZxaNYXHVt",
              },
              {
                id: 18,
                title: "18. DC Circuit Math (KVL) Class -15",
                url: "https://youtu.be/Yab7qRqAcjo?si=pxS72fXNTgrAZESC",
              },
              {
                id: 19,
                title: "19. DC Circuit Math class -16",
                url: "https://youtu.be/EvFVLVqjTwc?si=vOeAs0M-SSCmRFJi",
              },
              {
                id: 20,
                title: "20. DC Circuit Math class-17 (KVL-KCL)",
                url: "https://youtu.be/rtIqFxuJo2E?si=vgPGvwr-eDY_d5NP",
              },
            ],
          },
          // More courses...
        ],
      },
      {
        number: 6,
        courses: [
          {
            courseId: 1,
            name: "Operating Systems",
            playlist: [
              {
                id: 1,
                title: "(Part-1.1) Introduction to Operating System",
                url: "https://youtu.be/tZTOOzDnw24?si=tHSTRykOmxcvUkvG",
              },
              {
                id: 2,
                title: "(Part-1.2) Goals and Functions of Operating System",
                url: "https://youtu.be/2gIcc_ISB94?si=07S-pmFp1ynawEG8",
              },
              {
                id: 3,
                title: "(Part-1.3) Types of Operating System",
                url: "https://youtu.be/aC-pZzIg6MI?si=2GC1bqg3JxfJaFDL",
              },
              {
                id: 4,
                title: "(Part-1.4) Batch Operating System",
                url: "https://youtu.be/BtNLlUdbBo8?si=e2CMBHjncw17r6N8",
              },
              {
                id: 5,
                title: "(Part-1.5) Multiprogramming Operating System",
                url: "https://youtu.be/Z9UYksBBIrU?si=NwgolRAZ8Nq8VGqq",
              },
              {
                id: 6,
                title: "(Part-1.6) Multitasking Operating System",
                url: "https://youtu.be/YsHgM1ZhKuQ?si=QePCHO3nmJfqKQ1V",
              },
              {
                id: 7,
                title: "(Part-1.7) Multiprocessing Operating System",
                url: "https://youtu.be/ZMosas_u6cQ?si=xDVBaH-3YbQu8xpF",
              },
              {
                id: 8,
                title: "(Part-1.8) Distributed Operating System",
                url: "https://youtu.be/5PoHCgkosiA?si=AJXKW1t865CQUft3",
              },
              {
                id: 9,
                title: "(Part-1.9) Embedded Operating System",
                url: "https://youtu.be/KLBs5pCh174?si=fkTR-58k2bRHpcPr",
              },
              {
                id: 10,
                title: "(Part-1.10) Real-Time Operating System",
                url: "https://youtu.be/usx9HCQilxc?si=dG3jBx33GJIFwys0",
              },
              {
                id: 11,
                title: "(Part-1.11) Process in Operating System",
                url: "https://youtu.be/w1cCnUdSXek?si=5iuephik83NsyAA-",
              },
              {
                id: 12,
                title: "(Part-1.12) States of a Process ",
                url: "https://youtu.be/bFfSIAliNYU?si=Qv6PsDJS3ne3eu2C",
              },
              {
                id: 13,
                title:
                  "(Part-1.13) Long Term, Short Term and Medium Term Scheduler",
                url: "https://youtu.be/Cm28QayeGGc?si=kO5KreSYOXfQyQR3",
              },
              {
                id: 14,
                title: "(Part-1.14) Kernel Mode and User Mode",
                url: "https://youtu.be/96Nhn0hrGZA?si=2DfFeCq4_EOuQ2D5",
              },
              {
                id: 15,
                title: "(Part-1.15) Types of System Calls",
                url: "https://youtu.be/BPokOCnrJws?si=dm6gB8pmwAAxj3tL",
              },
              {
                id: 16,
                title: "(Part-1.16) Fork System Call (Part1)",
                url: "https://youtu.be/tbzte0G3CwE?si=Kf7YZy1zKtIBwQ2y",
              },
              {
                id: 17,
                title: "(Part-1.17) Fork System Call (Part2)",
                url: "https://youtu.be/pICNLxNZUew?si=vx2ES5TGjjS9dcWC",
              },
              {
                id: 18,
                title: "(Part-1.18) Fork System Call (Part3)",
                url: "https://youtu.be/8vBHrFdK0Vw?si=ragEhWg_1UEnYUV7",
              },
              {
                id: 19,
                title: "(Part-1.19) Process vs Thread",
                url: "https://youtu.be/CGIPuj1AjqE?si=UCDv7z9_S6ECC4Nw",
              },
              {
                id: 20,
                title: "(Part-1.20) User Level thread vs Kernel Level thread",
                url: "https://youtu.be/BYvRzEP5g0o?si=p4trAYCJyYOfL0we",
              },
              {
                id: 21,
                title: "(Part-2.1) CPU Scheduling",
                url: "https://youtu.be/ZPQGnEYxP74?si=S3JjVBDbfzBwEcza",
              },
              {
                id: 22,
                title: "(Part-2.2) Important CPU scheduling Terminologies",
                url: "https://youtu.be/bw_g0-GU24g?si=1seMZN_LSviHbxxB",
              },
              {
                id: 23,
                title:
                  "(Part-2.3) First Come First Serve (FCFS) Scheduling Algorithm",
                url: "https://youtu.be/9BsFCuHf9XQ?si=DPgYYu2W_2Y8dddu",
              },
              {
                id: 24,
                title:
                  "(Part-2.4) Shortest Job First (SJF) Scheduling Algorithm",
                url: "https://youtu.be/QjjDJd7Nw6g?si=Y9ySxcgpMXX8TMxy",
              },
              {
                id: 25,
                title:
                  "(Part-2.5) Shortest Remaining Time First (SRTF) Scheduling Algorithm",
                url: "https://youtu.be/HGOcv0ecQ7Q?si=_skna2TN8xw-u_G2",
              },
              {
                id: 26,
                title:
                  "(Part-2.6) SRTF with Processes contains CPU and IO Time",
                url: "https://youtu.be/AwgLAjooQTQ?si=YsnyyELj13pdgQ-B",
              },
              {
                id: 27,
                title: "(Part-2.7) Round Robin Scheduling Algorithm",
                url: "https://youtu.be/vo4Cb-RELR0?si=6r0q91FTS1x5cHrc",
              },
              {
                id: 28,
                title: "(Part-2.8) Non Preemptive Priority Scheduling",
                url: "https://youtu.be/Ml6Vtxwyeik?si=qTXC5ncAyarlG0Eh",
              },
              {
                id: 29,
                title: "(Part-2.9) Preemptive Priority Scheduling",
                url: "https://youtu.be/WmHJWk-XQlA?si=QXFbY34FCpGZSZ4C",
              },
              {
                id: 30,
                title: "(Part-2.10) Highest Response Ratio Next (HRRN)",
                url: "https://youtu.be/jZg-Q9mlPq4?si=ISOOuwjwg4ij2OQ5",
              },
              //Lecturelia
            ],
          },
          {
            courseId: 2,
            name: "Artificial Intelligence",
            playlist: [
              {
                id: 1,
                title: "(Lec-1) Introduction to Artificial Intelligence ",
                url: "https://youtu.be/rdexw3Rc5cw?si=wDkmW2spRExpQUu9",
              },
              {
                id: 2,
                title: "(Lec-2) Goals and Applications of AI",
                url: "https://youtu.be/CzeBCadJaFM?si=PplnpTKvrZhDXXSn",
              },
              {
                id: 3,
                title: "(Lec-3) Can machine think?",
                url: "https://youtu.be/oyKnsjOKr74?si=VGBj81k38Y0xIFpy",
              },
              {
                id: 4,
                title: "(Lec-4) Turing Test",
                url: "https://youtu.be/0FAUG-RpJvk?si=UwaRQ8EUtMNaYNqi",
              },
              {
                id: 5,
                title: "(Lec-5) State Space Search",
                url: "https://youtu.be/frWjmN75HNY?si=KNpEjK8vlK3rj5p4",
              },
              {
                id: 6,
                title: "(Lec-6) Uninformed searching VS Informed searching",
                url: "https://youtu.be/Q7dOfw3WLlA?si=NOg2qwo5lov4dt06",
              },
              {
                id: 7,
                title: "(Lec-7) Breadth First Search (BFS)",
                url: "https://youtu.be/axafPL1ePtM?si=M5aRcqObBgT9eRev",
              },
              {
                id: 8,
                title: "(Lec-8) Depth First Search (DFS)",
                url: "https://youtu.be/QBgMf05rnHs?si=7xjWH2maFBjFKyiI",
              },
              {
                id: 9,
                title: "(Lec-9) Iterative Deepening Search (IDS)",
                url: "https://youtu.be/qH7TVUlhdgk?si=u8rzkK8u4NjLyWlc",
              },
              {
                id: 10,
                title: "(Lec-10) Bidirectional Search",
                url: "https://youtu.be/qZyRb73l3YU?si=CG4Ipks-VTALC12N",
              },
              {
                id: 11,
                title: "(Lec-11) 8 Puzzle Problem without Heuristic",
                url: "https://youtu.be/SLR0JIpKrII?si=C2X9769B0-U1gVQv",
              },
              {
                id: 12,
                title: "(Lec-12) 8 Puzzle Problem with Heuristic",
                url: "https://youtu.be/1s6f7koWW1w?si=tKJa4EpAVhQ_jaMj",
              },
              {
                id: 13,
                title: "(Lec-13) Generate and Test Search",
                url: "https://youtu.be/sAlum5gRTCw?si=M6FTTt4p0mgSNgRx",
              },
              {
                id: 14,
                title: "(Lec-14) Best First Search",
                url: "https://youtu.be/S70-eFiROGQ?si=S-eQDJ9Yzw7y1G72",
              },
              {
                id: 15,
                title: "(Lec-15) A* Search Algorithm",
                url: "https://youtu.be/qVu0Fgde-LI?si=F_8yOwkMowSAcwZ9",
              },
              {
                id: 16,
                title: "(Lec-16) Admissibility of A* Algorithm",
                url: "https://youtu.be/SYOOTz2MVVw?si=H1adxGYOzupzexDP",
              },
              {
                id: 17,
                title: "(Lec-17) Beam Search Algorithm",
                url: "https://youtu.be/mRHyEmI1brg?si=Ml2eqIqdYMqr24lY",
              },
              {
                id: 18,
                title: "(Lec-18) Hill Climbing Algorithm",
                url: "https://youtu.be/mAA4Gm1oOAc?si=B0unPuLCmqQ2HARz",
              },
              {
                id: 19,
                title: "(Lec-19) AO* Search Algorithm",
                url: "https://youtu.be/C0Sb8xuHog4?si=OIxDvZdAehvIPqA2",
              },
              {
                id: 20,
                title: "(Lec-20) Game Playing",
                url: "https://youtu.be/PMbPFC2djJQ?si=p9f9PVTdvtQ3EKPQ",
              },
              //Lecturelia
            ],
          },
          {
            courseId: 3,
            name: "Software Engineering",
            playlist: [
              {
                id: 1,
                title: "(Lec-1) Software Engineering Introduction",
                url: "https://youtu.be/EgoclyVN8Z4?si=8RCwhWF6FWnPFOXS",
              },
              {
                id: 2,
                title: "(Lec-2) Software Development Life Cycle",
                url: "https://youtu.be/M6WI-Sw_JMY?si=kghfRyk90RRarKIV",
              },
              {
                id: 3,
                title: "(Lec-3) SDLC phases",
                url: "https://youtu.be/GIby5n2ovF0?si=Oi-zyYPVDSr-NssU",
              },
              {
                id: 4,
                title: "(Lec-4) Waterfall Model",
                url: "https://youtu.be/qo9I57qH1Tc?si=fdu650LvwidPiPHL",
              },
              {
                id: 5,
                title: "(Lec-5) Iterative Waterfall Model",
                url: "https://youtu.be/p6aozqBCJ-4?si=v9b0-Bw9MwkPiRyq",
              },
              {
                id: 6,
                title: "(Lec-6) Incremental Model",
                url: "https://youtu.be/0-UGwdc1HJw?si=0PWPKlLhmeKS_kd5",
              },
              {
                id: 7,
                title: "(Lec-7) Re-use Oriented Software Engineering",
                url: "https://youtu.be/zkjbZqwMiIU?si=Ip9BhAW8jKasPwLV",
              },
              {
                id: 8,
                title: "(Lec-8) Spiral Model",
                url: "https://youtu.be/EKCasacOaMs?si=xZljHviYar-3N95q",
              },
              {
                id: 9,
                title: "(Lec-9) Prototype Model",
                url: "vhttps://youtu.be/4Esx-XE8tbA?si=qUYfOG-OMNBhqvvj",
              },
              {
                id: 10,
                title: "(Lec-10) Requirement Engineering",
                url: "https://youtu.be/FFw432XtlIY?si=uMpn9nhKPEtb4L8K",
              },
              {
                id: 11,
                title: "(Lec-11) Types of Requirement",
                url: "https://youtu.be/QuyjEE6vUVg?si=9yRtExcscEOuQqny",
              },
              {
                id: 12,
                title:
                  "(Lec-12) Functional Requirement VS NonFunctional Requirement",
                url: "https://youtu.be/y07pK9VcRRQ?si=hruQFHD3yHp5SMXV",
              },
              {
                id: 13,
                title: "(Lec-13) Types of Non-functional Requirements",
                url: "https://youtu.be/RKR-nxp8cVE?si=7UlYFnQJg8pDodUw",
              },
              {
                id: 14,
                title: "(Lec-14) Requirement Engineering Process",
                url: "https://youtu.be/_YycsMUtO7U?si=rc-kX4h_BQWALY3p",
              },
              {
                id: 15,
                title: "(Lec-15) Requirements Elicitation and Analysis",
                url: "https://youtu.be/FQsEb5QbZco?si=Nc10DFFxSdl6iN3W",
              },
              {
                id: 16,
                title: "(Lec-16) Requirements Validation Techniques",
                url: "https://youtu.be/BU6iN7eGCgU?si=nrfbhr9O5DILe-MM",
              },
              {
                id: 17,
                title: "(Lec-17) System Modeling",
                url: "https://youtu.be/IDtIadY05bE?si=BNgE7nRv24yBcnVy",
              },
              {
                id: 18,
                title: "(Lec-18) Context Models",
                url: "https://youtu.be/34BNM__pZQo?si=YGWbOoHMQWRsycJ1",
              },
              {
                id: 19,
                title: "(Lec-19) Interaction Models",
                url: "https://youtu.be/LDIfF26FRlc?si=PBpRkNuPzGkXYbE6",
              },
              {
                id: 20,
                title: "(Lec-20) Structural Models",
                url: "https://youtu.be/HnUiG_GycBw?si=vXGBCOQlcTLCPl_p",
              },

              //export for Lecturelia
            ],
          },
          {
            courseId: 4,
            name: "Economics",
            playlist: [
              {
                id: 1,
                title: "1. Introduction and Supply & Demand",
                url: "https://youtu.be/_OkTw766oCs?si=tD8WnpzJhMR6bdUN",
              },
              {
                id: 2,
                title: "2. Preferences and Utility Functions",
                url: "https://youtu.be/tCKk22kaZi4?si=nQZfL6VBGnJ9pxMo",
              },
              {
                id: 3,
                title: "3. Budget Constraints and Constrained Choice",
                url: "https://youtu.be/jHEPQpSKdbg?si=OQvwA9SKb0pUmSNn",
              },
              {
                id: 4,
                title: "4. Demand Curves and Income/Substitution Effects",
                url: "https://youtu.be/x0scPosOsoI?si=tn07ogBq7zU7an2i",
              },
              {
                id: 5,
                title: "5. Production Theory",
                url: "https://youtu.be/ftmvsahQ6Wo?si=2n6pObprc-L6aK7_",
              },
              {
                id: 6,
                title: "6. Costs",
                url: "https://youtu.be/TSYNHb6YBEE?si=Nc4wYRiICGg4FUtS",
              },
              {
                id: 7,
                title: "7. Compiition I",
                url: "https://youtu.be/BNy84DCRxzo?si=1k01I2muhiUwwMF6",
              },
              {
                id: 8,
                title: "8. Compitition II",
                url: "https://youtu.be/F0ulAkrfvzo?si=IdhLCIu0p6wYOj8T",
              },
              {
                id: 9,
                title: "9. Supply and Demand & Consumer/Producer Surplus",
                url: "https://youtu.be/1UtJGRojmIg?si=-6VGJfkRWnYY_-nc",
              },
              {
                id: 10,
                title: "10. Welfare Economics",
                url: "https://youtu.be/PC3qooaF5Xs?si=iLdJqkaPUES4tsWY",
              },
              {
                id: 11,
                title: "11. Monopoly I",
                url: "https://youtu.be/FJVOh57UxL8?si=L3eXMl2ZnNf9xcTD",
              },
              {
                id: 12,
                title: "11. Monopoly II",
                url: "https://youtu.be/ufrYzoR_4xE?si=yoJFgr5HcMFXfDO-",
              },
              {
                id: 13,
                title: "13. Oligopoly",
                url: "https://youtu.be/0kA91PvS3sk?si=ixC04qZOdggL_OeL",
              },
              {
                id: 14,
                title: "14. Oligopoly II",
                url: "https://youtu.be/oFL2Hxqg7eo?si=yHiVpv0TsVasNlLY",
              },
              {
                id: 15,
                title: "15. Input Markets I—Labor Market",
                url: "https://youtu.be/6XhkCU8Rw_0?si=UYfTrIzvC8EtRYhk",
              },
              {
                id: 16,
                title: "16. Input Markets II—Labor and Capital",
                url: "https://youtu.be/RnN2rgCrIzs?si=Ov72yoVKFUZCTLIh",
              },
              {
                id: 17,
                title: "17. Making Choices Over Time",
                url: "https://youtu.be/BUnUOv_INyM?si=r0-jIu8ySIoirmiq",
              },
              {
                id: 18,
                title: "18. Increasing Savings & Introduction to Trade",
                url: "https://youtu.be/B6wI0CE4GjM?si=ROSv86S2uKEFW52J",
              },
              {
                id: 19,
                title: "19. International Trade: Welfare and Policy",
                url: "https://youtu.be/DxXB8Q5AWvw?si=CVv6z9poFhth2Uc1",
              },
              {
                id: 20,
                title: "20. Uncertainty",
                url: "https://youtu.be/a9Uz7tXETq4?si=qEPZrGYrSRP6jZC5",
              },
              //MIT openCourseWare
            ],
          },
          // More courses...
        ],
      },
      {
        number: 7,
        courses: [
          {
            courseId: 1,
            name: "Operating Systems",
            playlist: [],
          },
          {
            courseId: 2,
            name: "Artificial Intelligence",
            playlist: [],
          },
          {
            courseId: 3,
            name: "Software Engineering",
            playlist: [],
          },
          {
            courseId: 4,
            name: "Data Communication",
            playlist: [],
          },
          // More courses...
        ],
      },
      {
        number: 8,
        courses: [
          {
            courseId: 1,
            name: "Operating Systems",
            playlist: [],
          },
          {
            courseId: 2,
            name: "Artificial Intelligence",
            playlist: [],
          },
          {
            courseId: 3,
            name: "Software Engineering",
            playlist:[],
          },
          {
            courseId: 4,
            name: "Data Communication",
            playlist:[],
          },
          // More courses...
        ],
      },
      // More semesters...
    ],
  },
  {
    name: "EEE",
    semesters: [
      {
        number: 1,
        courses: [
          {
            courseId: 1,
            name: "Computer Programming I",
            playlistId: "xyz123",
          },
          {
            courseId: 2,
            name: "Basic Electrical Engineering",
            playlistId: "xyz123",
          },
          {
            courseId: 3,
            name: "Mathematics I (Differential and Integral Calculus)",
            playlistId: "xyz123",
          },
          // More courses...
        ],
      },
      {
        number: 2,
        courses: [
          {
            courseId: 1,
            name: "Computer Programming II",
            playlistId: "xyz123",
          },
          {
            courseId: 2,
            name: "Discrete Mathematics",
            playlistId: "xyz123",
          },
          // More courses...
        ],
      },
      {
        number: 3,
        courses: [
          {
            courseId: 1,
            name: "Data Structures",
            playlistId: "xyz123",
          },
          {
            courseId: 2,
            name: "Digital Logic Design",
            playlistId: "xyz123",
          },
          {
            courseId: 3,
            name: "Software Development I",
            playlistId: "xyz123",
          },
          // More courses...
        ],
      },
      {
        number: 4,
        courses: [
          {
            courseId: 1,
            name: "Data Structures",
            playlistId: "xyz123",
          },
          {
            courseId: 2,
            name: "Digital Logic Design",
            playlistId: "xyz123",
          },
          {
            courseId: 3,
            name: "Software Development I",
            playlistId: "xyz123",
          },
          // More courses...
        ],
      },
      {
        number: 5,
        courses: [
          {
            courseId: 1,
            name: "Data Structures",
            playlistId: "xyz123",
          },
          {
            courseId: 2,
            name: "Digital Logic Design",
            playlistId: "xyz123",
          },
          {
            courseId: 3,
            name: "Software Development I",
            playlistId: "xyz123",
          },
          // More courses...
        ],
      },
      {
        number: 6,
        courses: [
          {
            courseId: 1,
            name: "Operating Systems",
            playlistId: "xyz123",
          },
          {
            courseId: 2,
            name: "Artificial Intelligence",
            playlistId: "xyz123",
          },
          {
            courseId: 3,
            name: "Software Engineering",
            playlistId: "xyz123",
          },
          {
            courseId: 4,
            name: "Data Communication",
            playlistId: "xyz123",
          },
          // More courses...
        ],
      },
      {
        number: 7,
        courses: [
          {
            courseId: 1,
            name: "Operating Systems",
            playlistId: "xyz123",
          },
          {
            courseId: 2,
            name: "Artificial Intelligence",
            playlistId: "xyz123",
          },
          {
            courseId: 3,
            name: "Software Engineering",
            playlistId: "xyz123",
          },
          {
            courseId: 4,
            name: "Data Communication",
            playlistId: "xyz123",
          },
          // More courses...
        ],
      },
      {
        number: 8,
        courses: [
          {
            courseId: 1,
            name: "Operating Systems",
            playlistId: "xyz123",
          },
          {
            courseId: 2,
            name: "Artificial Intelligence",
            playlistId: "xyz123",
          },
          {
            courseId: 3,
            name: "Software Engineering",
            playlistId: "xyz123",
          },
          {
            courseId: 4,
            name: "Data Communication",
            playlistId: "xyz123",
          },
          // More courses...
        ],
      },
      // More semesters...
    ],
  },
  {
    name: "ETE",
    semesters: [],
  },
  {
    name: "CCE",
    semesters: [],
  },
  // More departments...
];
export default departments;
