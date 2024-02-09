var mdpTemplate = [
    {
        "sectionName": "Info",
        "sectionActivated": true,
        "sectionData": [
            {
                "name": "title",
                "candidate": [""],
                "defaultValue": "",
                "comment": "job title"
            },
            {
                "name": "define",
                "candidate": [""],
                "defaultValue": "",
                "comment": "defines to pass to the preprocessor"
            }
        ],
    },
    {
        "sectionName": "Run control",
        "sectionActivated": true,
        "sectionData": [
            {
                "name": "integrator",
                "candidate": ["steep", "md", "", "cg"],
                "defaultValue": "",
                "comment": "Integration method"
            },
            {
                "name": "dt",
                "candidate": [""],
                "defaultValue": "",
                "comment": "delta t"
            },
            {
                "name": "nsteps",
                "candidate": [""],
                "defaultValue": "",
                "comment": "number of md steps"
            }
        ],
    },
    {
        "sectionName": "EM",
        "sectionActivated": false,
        "sectionData": [
            {
                "name": "emtol",
                "candidate": [""],
                "defaultValue": "",
                "comment": "[kJ mol-1 nm-1] the minimization is converged when the maximum\
                 force is smaller than this value"
            },
            {
                "name": "emstep",
                "candidate": [""],
                "defaultValue": "0.01",
                "comment": "[nm] initial step-size"
            },
            {
                "name": "gen_seed",
                "candidate": [""],
                "defaultValue": "",
                "comment": "random seed"
            }
        ],
    },
    {
        "sectionName": "Velocity generation",
        "sectionActivated": false,
        "sectionData": [
            {
                "name": "gen_temp",
                "candidate": [""],
                "defaultValue": "",
                "comment": "temperature"
            },
            {
                "name": "gen_seed",
                "candidate": [""],
                "defaultValue": "",
                "comment": "random seed"
            },
            {
                "name": "gen_vel",
                "candidate": ["yes", "no", ""],
                "defaultValue": "no",
                "comment": "random seed"
            },
        ],
    },
    {
        "sectionName": "Neighbor searching",
        "sectionActivated": false,
        "sectionData": [
            {
                "name": "cutoff-scheme",
                "candidate": ["Verlet", "group", ""],
                "defaultValue": "",
                "comment": "temperature"
            },
            {
                "name": "ns-type",
                "candidate": ["grid", "simple", ""],
                "defaultValue": "",
                "comment": "random seed"
            },
            {
                "name": "nstlist",
                "candidate": [""],
                "defaultValue": "10",
                "comment": "Frequency to update the neighbor list"
            },
            {
                "name": "pbc",
                "candidate": ["xyz", "xy", 'no', ''],
                "defaultValue": "xyz",
                "comment": "random seed"
            }
        ],
    },
    {
        "sectionName": "Electrostatics",
        "sectionActivated": false,
        "sectionData": [
            {
                "name": "coulombtype",
                "candidate": ["Cut-off", "Ewald", "PME", ""],
                "defaultValue": "",
                "comment": "coulomb force type"
            },
            {
                "name": "rcoulomb",
                "candidate": [""],
                "defaultValue": "1",
                "comment": "[nm] distance for the Coulomb cut-off"
            },
        ],
    },
    {
        "sectionName": "Van der Waals",
        "sectionActivated": false,
        "sectionData": [
            {
                "name": "rvdw",
                "candidate": [""],
                "defaultValue": "1",
                "comment": "[nm] distance for the LJ or Buckingham cut-off"
            },
        ],
    },
    {
        "sectionName": "COM pulling",
        "sectionActivated": false,
        "sectionData": [
            {
                "name": "pull",
                "candidate": ["", "yes", "no"],
                "defaultValue": "1",
                "comment": "pull"
            },
        ],
    },
    {
        "sectionName": "Temperature coupling",
        "sectionActivated": false,
        "sectionData": [
            {
                "name": "tcoupl",
                "candidate": ["no", "berendsen", "v-rescale", ""],
                "defaultValue": "0",
                "comment": "Temperature coupling method"
            },
            {
                "name": "tau-t",
                "candidate": [""],
                "defaultValue": "0",
                "comment": "[ps] time constant for coupling"
            },
            {
                "name": "ref-t",
                "candidate": [""],
                "defaultValue": "0",
                "comment": "[K] reference temperature for coupling"
            },
        ],
    },
    {
        "sectionName": "Pressure coupling",
        "sectionActivated": false,
        "sectionData": [
            {
                "name": "pcoupl",
                "candidate": ["no", "berendsen", "C-rescale", ""],
                "defaultValue": "0",
                "comment": "Pressure coupling method"
            },
            {
                "name": "tau-p",
                "candidate": [""],
                "defaultValue": "0",
                "comment": "[ps] time constant for coupling"
            },
            {
                "name": "ref-p",
                "candidate": [""],
                "defaultValue": "0",
                "comment": "[bar] reference pressure for coupling"
            },
        ],
    },
    {
        "sectionName": "Output control",
        "sectionActivated": false,
        "sectionData": [
            {
                "name": "nstxout",
                "candidate": [""],
                "defaultValue": "0",
                "comment": " number of steps that elapse between writing coordinates to the output trajectory file"
            },
        ],
    },
];

export default mdpTemplate;