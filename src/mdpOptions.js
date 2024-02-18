var mdpOptions = [
    //detailed infomation in manual.gromacs.org/documentation/2023/user-guide/mdp-options.html
    //Preprocessing
    {
        "sectionName": "Preprocessing",
        "sectionActivated": false,
        "sectionData": [
            {
                "name": "define",
                "candidate": [""],
                "defaultValue": "",
                "comment": "defines to pass to the preprocessor"
            },
            {
                "name": "include",
                "candidate": [""],
                "defaultValue": "",
                "comment": "directories to include in your topology"
            },
        ],
    },
    //Run control
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
                "name": "tinit",
                "candidate": [""],
                "defaultValue": "0",
                "comment": "[ps] starting time for your run"
            },
            {
                "name": "dt",
                "candidate": [""],
                "defaultValue": "0.001",
                "comment": "[ps] time step for integration"
            },
            {
                "name": "nsteps",
                "candidate": [""],
                "defaultValue": "0",
                "comment": "maximum number of steps to integrate or minimize"
            }
        ],
    },
    {
        "sectionName": "Langevin dynamics",
        "sectionActivated": false,
        "sectionData": [
            {
                "name": "bd-fric",
                "candidate": [""],
                "defaultValue": "0",
                "comment": "[amu ps^-1] Brownian dynamics friction coefficient"
            },
            {
                "name": "ld-seed",
                "candidate": [""],
                "defaultValue": "-1",
                "comment": "[integer] used to initialize random generator for thermal noise for stochastic and Brownian dynamics."
            }
        ],
    },
    //EM
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
            }
        ],
    },
    //Velocity generation
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
    //Neighbor searching
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
    //Electrostatics
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
    //Van der Waals
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
                "name": "rvdw-switch",
                "candidate": [""],
                "defaultValue": "0",
                "comment": "[nm] where to start switching the LJ force and possibly the potential"
            },
            {
                "name": "vdw-modifier",
                "candidate": ["Potential-shift", "None", "Force-switch", "Potential-switch", ""],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "DispCorr",
                "candidate": ["", "no", "EnerPres", "Ener"],
                "defaultValue": "no",
                "comment": "dispersion correction"
            },
        ],
    },
    //Ewald
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
    //COM pulling
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
            {
                "name": "pull-ngroups",
                "candidate": [""],
                "defaultValue": "1",
                "comment": " The number of pull groups, not including the absolute reference group, when used."
            },
            {
                "name": "pull-ncoords",
                "candidate": [""],
                "defaultValue": "1",
                "comment": "The number of pull coordinates"
            },
            {
                "name": "pull-group1-name",
                "candidate": [""],
                "defaultValue": "",
                "comment": "The name of the pull group"
            },
            {
                "name": "pull-coord1-geometry",
                "candidate": ["", "distance", "direction", ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "pull-coord1-groups",
                "candidate": [""],
                "defaultValue": "",
                "comment": "The group indices on which this pull coordinate will operate"
            },
            {
                "name": "pull-group2-name",
                "candidate": [""],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "pull-coord1-type",
                "candidate": ["", "umbrella", "constraint"],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "pull-coord1-k",
                "candidate": [""],
                "defaultValue": "0",
                "comment": "[kJ mol-1 rad-1] The force constant"
            },
            {
                "name": "pull-coord1-rate",
                "candidate": [""],
                "defaultValue": "0",
                "comment": "[deg/ps] The rate of change of the reference position or reference angle."
            },
            {
                "name": "pull-coord1-init",
                "candidate": [""],
                "defaultValue": "0",
                "comment": "[nm] or [deg] The reference distance or reference angle at t=0."
            },
        ],
    },
    //Bonds
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
    //Temperature coupling
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
    //Pressure coupling
    {
        "sectionName": "Pressure coupling",
        "sectionActivated": false,
        "sectionData": [
            {
                "name": "pcoupl",
                "candidate": ["no", "berendsen", "C-rescale","Parrinello-Rahman", ""],
                "defaultValue": "0",
                "comment": "Pressure coupling method"
            },
            {
                "name": "pcoupltype",
                "candidate": ["isotropic", "semiisotropic", "anisotropic", "surface-tension", ""],
                "defaultValue": "",
                "comment": "Specifies the kind of isotropy of the pressure coupling used"
            },
            {
                "name": "tau-p",
                "candidate": [""],
                "defaultValue": "0",
                "comment": "[ps] time constant for coupling"
            },
            {
                "name": "compressibility",
                "candidate": [""],
                "defaultValue": "",
                "comment": "[bar^-1] The compressibility"
            },
            {
                "name": "ref-p",
                "candidate": [""],
                "defaultValue": "0",
                "comment": "[bar] reference pressure for coupling"
            },
            {
                "name": "refcoord-scaling",
                "candidate": ["no", "all", "com", ""],
                "defaultValue": "0",
                "comment": ""
            },
        ],
    },
    //Output control
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
            {
                "name": "nstxout-compressed",
                "candidate": [""],
                "defaultValue": "0",
                "comment": "[steps] number of steps that elapse between writing position coordinates using lossy compression "
            },
        ],
    },
];

export default mdpOptions;