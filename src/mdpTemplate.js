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
        "sectionActivated": false,
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
                "name": "gen-temp",
                "candidate": [""],
                "defaultValue": "",
                "comment": "temperature"
            },
            {
                "name": "gen-seed",
                "candidate": [""],
                "defaultValue": "",
                "comment": "random seed"
            },
            {
                "name": "gen-vel",
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
            {
                "name": "DispCorr",
                "candidate": ["", "no", "EnerPres", "Ener"],
                "defaultValue": "no",
                "comment": "dispersion correction"
            },
        ],
    },
    {
        "sectionName": "Ewald",
        "sectionActivated": false,
        "sectionData": [
            {
                "name": "fourierspacing",
                "candidate": [""],
                "defaultValue": "0.12",
                "comment": "[nm]"
            },
            {
                "name": "pme-order",
                "candidate": [""],
                "defaultValue": "4",
                "comment": "Interpolation order for PME"
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
        "sectionName": "Bonds",
        "sectionActivated": false,
        "sectionData": [
            {
                "name": "constraints",
                "candidate": ["", "none", "h-bonds"],
                "defaultValue": "none",
                "comment": "Controls which bonds in the topology will be converted to rigid holonomic constraints"
            },
            {
                "name": "continuation",
                "candidate": ["", "yes", "no"],
                "defaultValue": "no",
                "comment": "unconstrained-start"
            },
            {
                "name": "constraint-algorithm",
                "candidate": ["", "LINCS", "SHAKE"],
                "defaultValue": "LINCS",
                "comment": "Chooses which solver satisfies any non-SETTLE holonomic constraints"
            },
            {
                "name": "lincs-order",
                "candidate": [""],
                "defaultValue": "4",
                "comment": "Highest order in the expansion of the constraint coupling matrix"
            },
            {
                "name": "lincs-iter",
                "candidate": [""],
                "defaultValue": "1",
                "comment": "Number of iterations to correct for rotational lengthening in LINCS"
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
                "name": "tc-grps",
                "candidate": [""],
                "defaultValue": "",
                "comment": "Temperature coupling groups"
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
            {
                "name": "nstvout",
                "candidate": [""],
                "defaultValue": "0",
                "comment": " number of steps that elapse between writing velocities to the output trajectory file"
            },
            {
                "name": "nstfout",
                "candidate": [""],
                "defaultValue": "0",
                "comment": " number of steps that elapse between writing forces to the output trajectory file"
            },
            {
                "name": "nstlog",
                "candidate": [""],
                "defaultValue": "1000",
                "comment": "[steps] number of steps that elapse between writing energies to the log file"
            },
            {
                "name": "nstenergy",
                "candidate": [""],
                "defaultValue": "1000",
                "comment": "[steps] number of steps that elapse between writing energies to energy file"
            },
        ],
    },
];

export default mdpTemplate;