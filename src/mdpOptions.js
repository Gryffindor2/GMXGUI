var mdpOptions = [
    {
        "sectionName": "Preprocessing",
        
        "sectionData": [
            {
                "name": "include",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "directories to include in your topology."
            },
            {
                "name": "define",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "defines to pass to the preprocessor, default is no defines."
            }
        ]
    },
    {
        "sectionName": "Run control",
        
        "sectionData": [
            {
                "name": "integrator",
                "candidate": [
                    "md",
                    "md-vv",
                    "md-vv-avek",
                    "sd",
                    "bd",
                    "steep",
                    "cg",
                    "l-bfgs",
                    "nm",
                    "tpi",
                    "tpic",
                    "mimic",
                    ""
                ],
                "defaultValue": "Despite the name, this list includes algorithms that are not actually integrators over time. integrator=steep and all entries following it are in this category",
                "comment": ""
            },
            {
                "name": "tinit",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": "[ps] starting time for your run (only makes sense for time-based integrators)."
            },
            {
                "name": "dt",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.001",
                "comment": "[ps] time step for integration (only makes sense for time-based integrators)."
            },
            {
                "name": "nsteps",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": "maximum number of steps to integrate or minimize, -1 is no maximum."
            },
            {
                "name": "init-step",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " The starting step."
            },
            {
                "name": "simulation-part",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " A simulation can consist of multiple parts, each of which has a part number."
            },
            {
                "name": "mts",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "mts-levels",
                "candidate": [
                    ""
                ],
                "defaultValue": "2",
                "comment": " The number of levels for the multiple time-stepping scheme."
            },
            {
                "name": "mts-level2-forces",
                "candidate": [
                    ""
                ],
                "defaultValue": "longrange-nonbonded",
                "comment": " A list of one or more force groups that will be evaluated only every mts-level2-factor steps."
            },
            {
                "name": "mts-level2-factor",
                "candidate": [
                    ""
                ],
                "defaultValue": "2",
                "comment": "[steps] Interval for computing the forces in level 2 of the multiple time-stepping scheme."
            },
            {
                "name": "comm-mode",
                "candidate": [
                    "Linear",
                    "Angular",
                    "Linear-acceleration-correction",
                    "None",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "nstcomm",
                "candidate": [
                    ""
                ],
                "defaultValue": "100",
                "comment": "[steps] frequency for center of mass motion removal."
            },
            {
                "name": "comm-grps",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "group(s) for center of mass motion removal, default is the whole system."
            }
        ]
    },
    {
        "sectionName": "Langevin dynamics",
        
        "sectionData": [
            {
                "name": "bd-fric",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " [amu ps-1] Brownian dynamics friction coefficient."
            },
            {
                "name": "ld-seed",
                "candidate": [
                    ""
                ],
                "defaultValue": "-1",
                "comment": " [integer] used to initialize random generator for thermal noise for stochastic and Brownian dynamics."
            }
        ]
    },
    {
        "sectionName": "Energy minimization",
        
        "sectionData": [
            {
                "name": "emtol",
                "candidate": [
                    ""
                ],
                "defaultValue": "10.0",
                "comment": "[kJ mol-1 nm-1] the minimization is converged when the maximum force is smaller than this value."
            },
            {
                "name": "emstep",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.01",
                "comment": "[nm] initial step-size."
            },
            {
                "name": "nstcgsteep",
                "candidate": [
                    ""
                ],
                "defaultValue": "1000",
                "comment": " [steps] frequency of performing 1 steepest descent step while doing conjugate gradient energy minimization."
            },
            {
                "name": "nbfgscorr",
                "candidate": [
                    ""
                ],
                "defaultValue": "10",
                "comment": " Number of correction steps to use for L-BFGS minimization."
            }
        ]
    },
    {
        "sectionName": "Shell Molecular Dynamics",
        
        "sectionData": [
            {
                "name": "niter",
                "candidate": [
                    ""
                ],
                "defaultValue": "20",
                "comment": " maximum number of iterations for optimizing the shell positions and the flexible constraints."
            },
            {
                "name": "fcstep",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " [ps2] the step size for optimizing the flexible constraints."
            }
        ]
    },
    {
        "sectionName": "Test particle insertion",
        
        "sectionData": [
            {
                "name": "rtpi",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.05",
                "comment": "[nm] the test particle insertion radius, see integrators integrator=tpi and integrator=tpic."
            }
        ]
    },
    {
        "sectionName": "Output control",
        
        "sectionData": [
            {
                "name": "nstxout",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " [steps] number of steps that elapse between writing coordinates to the output trajectory file (trr), the last coordinates are always written unless 0, which means coordinates are not written into the trajectory file."
            },
            {
                "name": "nstvout",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " [steps] number of steps that elapse between writing velocities to the output trajectory file (trr), the last velocities are always written unless 0, which means velocities are not written into the trajectory file."
            },
            {
                "name": "nstfout",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " [steps] number of steps that elapse between writing forces to the output trajectory file (trr), the last forces are always written, unless 0, which means forces are not written into the trajectory file."
            },
            {
                "name": "nstlog",
                "candidate": [
                    ""
                ],
                "defaultValue": "1000",
                "comment": " [steps] number of steps that elapse between writing energies to the log file, the last energies are always written."
            },
            {
                "name": "nstcalcenergy",
                "candidate": [
                    ""
                ],
                "defaultValue": "100",
                "comment": " number of steps that elapse between calculating the energies, 0 is never."
            },
            {
                "name": "nstenergy",
                "candidate": [
                    ""
                ],
                "defaultValue": "1000",
                "comment": " [steps] number of steps that elapse between writing energies to energy file, the last energies are always written, should be a multiple of nstcalcenergy."
            },
            {
                "name": "nstxout-compressed",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " [steps] number of steps that elapse between writing position coordinates using lossy compression (xtc file), 0 for not writing compressed coordinates output."
            },
            {
                "name": "compressed-x-precision",
                "candidate": [
                    ""
                ],
                "defaultValue": "1000",
                "comment": "[real] precision with which to write to the compressed trajectory file."
            },
            {
                "name": "compressed-x-grps",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "group(s) to write to the compressed trajectory file, by default the whole system is written (if nstxout-compressed > 0)."
            },
            {
                "name": "energygrps",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "group(s) for which to write to write short-ranged non-bonded potential energies to the energy file (not supported on GPUs)."
            }
        ]
    },
    {
        "sectionName": "Neighbor searching",
        
        "sectionData": [
            {
                "name": "cutoff-scheme",
                "candidate": [
                    "Verlet",
                    "group",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "nstlist",
                "candidate": [
                    ">0",
                    "0",
                    "<0",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "pbc",
                "candidate": [
                    "xyz",
                    "no",
                    "xy",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "periodic-molecules",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "verlet-buffer-tolerance",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "Used when performing a simulation with dynamics."
            },
            {
                "name": "rlist",
                "candidate": [
                    ""
                ],
                "defaultValue": "1",
                "comment": " [nm] Cut-off distance for the short-range neighbor list."
            }
        ]
    },
    {
        "sectionName": "Electrostatics",
        
        "sectionData": [
            {
                "name": "coulombtype",
                "candidate": [
                    "Cut-off",
                    "Ewald",
                    "PME",
                    "P3M-AD",
                    "Reaction-Field",
                    "User",
                    "PME-Switch",
                    "PME-User",
                    "PME-User-Switch",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "coulomb-modifier",
                "candidate": [
                    "Potential-shift",
                    "None",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "rcoulomb-switch",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": "[nm] where to start switching the Coulomb potential, only relevant when force or potential switching is used."
            },
            {
                "name": "rcoulomb",
                "candidate": [
                    ""
                ],
                "defaultValue": "1",
                "comment": " [nm] The distance for the Coulomb cut-off."
            },
            {
                "name": "epsilon-r",
                "candidate": [
                    ""
                ],
                "defaultValue": "1",
                "comment": " The relative dielectric constant."
            },
            {
                "name": "epsilon-rf",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " The relative dielectric constant of the reaction field."
            }
        ]
    },
    {
        "sectionName": "Van der Waals",
        
        "sectionData": [
            {
                "name": "vdwtype",
                "candidate": [
                    "Cut-off",
                    "PME",
                    "Shift",
                    "Switch",
                    "User",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "vdw-modifier",
                "candidate": [
                    "Potential-shift",
                    "None",
                    "Force-switch",
                    "Potential-switch",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "rvdw-switch",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": "[nm] where to start switching the LJ force and possibly the potential, only relevant when force or potential switching is used."
            },
            {
                "name": "rvdw",
                "candidate": [
                    ""
                ],
                "defaultValue": "1",
                "comment": "[nm] distance for the LJ or Buckingham cut-off."
            },
            {
                "name": "DispCorr",
                "candidate": [
                    "no",
                    "EnerPres",
                    "Ener",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            }
        ]
    },
    {
        "sectionName": "Tables",
        
        "sectionData": [
            {
                "name": "table-extension",
                "candidate": [
                    ""
                ],
                "defaultValue": "1",
                "comment": " [nm] Extension of the non-bonded potential lookup tables beyond the largest cut-off distance."
            },
            {
                "name": "energygrp-table",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "Currently unsupported."
            }
        ]
    },
    {
        "sectionName": "Ewald",
        
        "sectionData": [
            {
                "name": "fourierspacing",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.12",
                "comment": " [nm] For ordinary Ewald, the ratio of the box dimensions and the spacing determines a lower bound for the number of wave vectors to use in each (signed) direction."
            },
            {
                "name": "fourier-nx",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "fourier-ny",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "fourier-nz",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " Highest magnitude of wave vectors in reciprocal space when using Ewald."
            },
            {
                "name": "pme-order",
                "candidate": [
                    ""
                ],
                "defaultValue": "4",
                "comment": " Interpolation order for PME."
            },
            {
                "name": "ewald-rtol",
                "candidate": [
                    ""
                ],
                "defaultValue": "10-5",
                "comment": " The relative strength of the Ewald-shifted direct potential at rcoulomb is given by ewald-rtol."
            },
            {
                "name": "ewald-rtol-lj",
                "candidate": [
                    ""
                ],
                "defaultValue": "10-3",
                "comment": " When doing PME for VdW-interactions, ewald-rtol-lj is used to control the relative strength of the dispersion potential at rvdw in the same way as ewald-rtol controls the electrostatic potential."
            },
            {
                "name": "lj-pme-comb-rule",
                "candidate": [
                    "Geometric",
                    "Lorentz-Berthelot",
                    ""
                ],
                "defaultValue": "Geometric",
                "comment": " The combination rules used to combine VdW-parameters in the reciprocal part of LJ-PME."
            },
            {
                "name": "ewald-geometry",
                "candidate": [
                    "3d",
                    "3dc",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "epsilon-surface",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " This controls the dipole correction to the Ewald summation in 3D."
            }
        ]
    },
    {
        "sectionName": "Temperature coupling",
        
        "sectionData": [
            {
                "name": "ensemble-temperature-setting",
                "candidate": [
                    "auto",
                    "constant",
                    "variable",
                    "not-available",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "ensemble-temperature",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "The ensemble temperature for the system."
            },
            {
                "name": "tcoupl",
                "candidate": [
                    "no",
                    "berendsen",
                    "nose-hoover",
                    "andersen",
                    "andersen-massive",
                    "v-rescale",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "nsttcouple",
                "candidate": [
                    ""
                ],
                "defaultValue": "-1",
                "comment": " The frequency for coupling the temperature."
            },
            {
                "name": "nh-chain-length",
                "candidate": [
                    ""
                ],
                "defaultValue": "10",
                "comment": " The number of chained Nose-Hoover thermostats for velocity Verlet integrators, the leap-frog integrator=md integrator only supports 1."
            },
            {
                "name": "print-nose-hoover-chain-variables",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "tc-grps",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "groups to couple to separate temperature baths."
            },
            {
                "name": "tau-t",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "[ps] time constant for coupling (one for each group in tc-grps), -1 means no temperature coupling."
            },
            {
                "name": "ref-t",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "[K] reference temperature for coupling (one for each group in tc-grps)."
            }
        ]
    },
    {
        "sectionName": "Pressure coupling",
        
        "sectionData": [
            {
                "name": "pcoupl",
                "candidate": [
                    "no",
                    "Berendsen",
                    "C-rescale",
                    "Parrinello-Rahman",
                    "MTTK",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "pcoupltype",
                "candidate": [
                    "isotropic",
                    "semiisotropic",
                    "anisotropic",
                    "surface-tension",
                    ""
                ],
                "defaultValue": "",
                "comment": "Specifies the kind of isotropy of the pressure coupling used."
            },
            {
                "name": "nstpcouple",
                "candidate": [
                    ""
                ],
                "defaultValue": "-1",
                "comment": " The frequency for coupling the pressure."
            },
            {
                "name": "tau-p",
                "candidate": [
                    ""
                ],
                "defaultValue": "1",
                "comment": " [ps] The time constant for pressure coupling (one value for all directions)."
            },
            {
                "name": "compressibility",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "[bar-1] The compressibility (NOTE: this is now really in bar-1) For water at 1 atm and 300 K the compressibility is 4."
            },
            {
                "name": "ref-p",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "[bar] The reference pressure for coupling."
            },
            {
                "name": "refcoord-scaling",
                "candidate": [
                    "no",
                    "all",
                    "com",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            }
        ]
    },
    {
        "sectionName": "Simulated annealing",
        
        "sectionData": [
            {
                "name": "annealing",
                "candidate": [
                    "no",
                    "single",
                    "periodic",
                    ""
                ],
                "defaultValue": "",
                "comment": "Type of annealing for each temperature group."
            },
            {
                "name": "annealing-npoints",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "A list with the number of annealing reference/control points used for each temperature group."
            },
            {
                "name": "annealing-time",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "List of times at the annealing reference/control points for each group."
            },
            {
                "name": "annealing-temp",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "List of temperatures at the annealing reference/control points for each group."
            }
        ]
    },
    {
        "sectionName": "Velocity generation",
        
        "sectionData": [
            {
                "name": "gen-vel",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "gen-temp",
                "candidate": [
                    ""
                ],
                "defaultValue": "300",
                "comment": "[K] temperature for Maxwell distribution."
            },
            {
                "name": "gen-seed",
                "candidate": [
                    ""
                ],
                "defaultValue": "-1",
                "comment": " [integer] used to initialize random generator for random velocities, when gen-seed is set to -1, a pseudo random seed is used."
            }
        ]
    },
    {
        "sectionName": "Bonds",
        
        "sectionData": [
            {
                "name": "constraints",
                "candidate": [
                    "none",
                    "h-bonds",
                    "all-bonds",
                    "h-angles",
                    "all-angles",
                    ""
                ],
                "defaultValue": "",
                "comment": "Controls which bonds in the topology will be converted to rigid holonomic constraints."
            },
            {
                "name": "constraint-algorithm",
                "candidate": [
                    "LINCS",
                    "SHAKE",
                    ""
                ],
                "defaultValue": "",
                "comment": "Chooses which solver satisfies any non-SETTLE holonomic constraints."
            },
            {
                "name": "continuation",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": "This option was formerly known as unconstrained-start."
            },
            {
                "name": "shake-tol",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.0001",
                "comment": "relative tolerance for SHAKE."
            },
            {
                "name": "lincs-order",
                "candidate": [
                    ""
                ],
                "defaultValue": "4",
                "comment": " Highest order in the expansion of the constraint coupling matrix."
            },
            {
                "name": "lincs-iter",
                "candidate": [
                    ""
                ],
                "defaultValue": "1",
                "comment": " Number of iterations to correct for rotational lengthening in LINCS."
            },
            {
                "name": "lincs-warnangle",
                "candidate": [
                    ""
                ],
                "defaultValue": "30",
                "comment": "[deg] maximum angle that a bond can rotate before LINCS will complain."
            },
            {
                "name": "morse",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            }
        ]
    },
    {
        "sectionName": "Energy group exclusions",
        
        "sectionData": [
            {
                "name": "energygrp-excl",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "Pairs of energy groups for which all non-bonded interactions are excluded."
            }
        ]
    },
    {
        "sectionName": "Walls",
        
        "sectionData": [
            {
                "name": "nwall",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " When set to 1 there is a wall at z=0, when set to 2 there is also a wall at z=z-box."
            },
            {
                "name": "wall-atomtype",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "the atom type name in the force field for each wall."
            },
            {
                "name": "wall-type",
                "candidate": [
                    "9-3",
                    "10-4",
                    "12-6",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "table",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "user defined potentials indexed with the z distance from the wall, the tables are read analogously to the energygrp-table option, where the first name is for a ânormalâ energy group and the second name is wall0 or wall1, only the dispersion and repulsion columns are used."
            },
            {
                "name": "wall-r-linpot",
                "candidate": [
                    ""
                ],
                "defaultValue": "-1",
                "comment": " [nm] Below this distance from the wall the potential is continued linearly and thus the force is constant."
            },
            {
                "name": "wall-density",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "[nm-3] / [nm-2] the number density of the atoms for each wall for wall types 9-3 and 10-4."
            },
            {
                "name": "wall-ewald-zfac",
                "candidate": [
                    ""
                ],
                "defaultValue": "3",
                "comment": " The scaling factor for the third box vector for Ewald summation only, the minimum is 2."
            }
        ]
    },
    {
        "sectionName": "COM pulling",
        
        "sectionData": [
            {
                "name": "pull",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "pull-cylinder-r",
                "candidate": [
                    ""
                ],
                "defaultValue": "1.5",
                "comment": "[nm] the radius of the cylinder for pull-coord1-geometry=cylinder."
            },
            {
                "name": "pull-constr-tol",
                "candidate": [
                    ""
                ],
                "defaultValue": "10-6",
                "comment": "the relative constraint tolerance for constraint pulling."
            },
            {
                "name": "pull-print-com",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "pull-print-ref-value",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "pull-print-components",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "pull-nstxout",
                "candidate": [
                    ""
                ],
                "defaultValue": "50",
                "comment": "frequency for writing out the COMs of all the pull group (0 is never)."
            },
            {
                "name": "pull-nstfout",
                "candidate": [
                    ""
                ],
                "defaultValue": "50",
                "comment": "frequency for writing out the force of all the pulled group (0 is never)."
            },
            {
                "name": "pull-pbc-ref-prev-step-com",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "pull-xout-average",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "pull-fout-average",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "pull-ngroups",
                "candidate": [
                    ""
                ],
                "defaultValue": "1",
                "comment": " The number of pull groups, not including the absolute reference group, when used."
            },
            {
                "name": "pull-ncoords",
                "candidate": [
                    ""
                ],
                "defaultValue": "1",
                "comment": " The number of pull coordinates."
            },
            {
                "name": "pull-group1-name",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "The name of the pull group, is looked up in the index file or in the default groups to obtain the atoms involved."
            },
            {
                "name": "pull-group1-weights",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "Optional relative weights which are multiplied with the masses of the atoms to give the total weight for the COM."
            },
            {
                "name": "pull-group1-pbcatom",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " The reference atom for the treatment of periodic boundary conditions inside the group (this has no effect on the treatment of the pbc between groups)."
            },
            {
                "name": "pull-coord1-type",
                "candidate": [
                    "umbrella",
                    "constraint",
                    "constant-force",
                    "flat-bottom",
                    "flat-bottom-high",
                    "external-potential",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "pull-coord1-potential-provider",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "The name of the external module that provides the potential for the case where pull-coord1-type is external-potential."
            },
            {
                "name": "pull-coord1-geometry",
                "candidate": [
                    "distance",
                    "direction",
                    "direction-periodic",
                    "direction-relative",
                    "cylinder",
                    "angle",
                    "angle-axis",
                    "dihedral",
                    "transformation",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "pull-coord1-expression",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "Mathematical expression to transform pull coordinates of lower indices to a new one."
            },
            {
                "name": "pull-coord1-dx",
                "candidate": [
                    ""
                ],
                "defaultValue": "1e-9",
                "comment": " Size of finite difference to use in numerical derivation of the pull coordinate with respect to other pull coordinates."
            },
            {
                "name": "pull-coord1-groups",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "The group indices on which this pull coordinate will operate."
            },
            {
                "name": "pull-coord1-dim",
                "candidate": [
                    ""
                ],
                "defaultValue": "Y Y Y",
                "comment": " Selects the dimensions that this pull coordinate acts on and that are printed to the output files when pull-print-components = pull-coord1-start=yes."
            },
            {
                "name": "pull-coord1-origin",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.0 0.0 0.0",
                "comment": " The pull reference position for use with an absolute reference."
            },
            {
                "name": "pull-coord1-vec",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.0 0.0 0.0",
                "comment": " The pull direction."
            },
            {
                "name": "pull-coord1-start",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "pull-coord1-init",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.0",
                "comment": " [nm] or [deg] The reference distance or reference angle at t=0."
            },
            {
                "name": "pull-coord1-rate",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " [nm/ps] or [deg/ps] The rate of change of the reference position or reference angle."
            },
            {
                "name": "pull-coord1-k",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " [kJ mol-1 nm-2] or [kJ mol-1 nm-1] or [kJ mol-1 rad-2] or [kJ mol-1 rad-1] The force constant."
            },
            {
                "name": "pull-coord1-kB",
                "candidate": [
                    ""
                ],
                "defaultValue": "pull-k1",
                "comment": " [kJ mol-1 nm-2] or [kJ mol-1 nm-1] or [kJ mol-1 rad-2] or [kJ mol-1 rad-1] As pull-coord1-k, but for state B."
            }
        ]
    },
    {
        "sectionName": "AWH adaptive biasing",
        
        "sectionData": [
            {
                "name": "awh",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "awh-potential",
                "candidate": [
                    "convolved",
                    "umbrella",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "awh-share-multisim",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "awh-seed",
                "candidate": [
                    ""
                ],
                "defaultValue": "-1",
                "comment": " Random seed for Monte-Carlo sampling the umbrella position, where -1 indicates to generate a seed."
            },
            {
                "name": "awh-nstout",
                "candidate": [
                    ""
                ],
                "defaultValue": "100000",
                "comment": " Number of steps between printing AWH data to the energy file, should be a multiple of nstenergy."
            },
            {
                "name": "awh-nstsample",
                "candidate": [
                    ""
                ],
                "defaultValue": "10",
                "comment": " Number of steps between sampling of the coordinate value."
            },
            {
                "name": "awh-nsamples-update",
                "candidate": [
                    ""
                ],
                "defaultValue": "10",
                "comment": " The number of coordinate samples used for each AWH update."
            },
            {
                "name": "awh-nbias",
                "candidate": [
                    ""
                ],
                "defaultValue": "1",
                "comment": " The number of biases, each acting on its own coordinate."
            },
            {
                "name": "awh1-error-init",
                "candidate": [
                    ""
                ],
                "defaultValue": "10.0",
                "comment": " [kJ mol-1] Estimated initial average error of the PMF for this bias."
            },
            {
                "name": "awh1-growth",
                "candidate": [
                    "exp-linear",
                    "linear",
                    ""
                ],
                "defaultValue": "",
                "comment": "As awh1-growth=exp-linear but skip the initial stage."
            },
            {
                "name": "awh1-equilibrate-histogram",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "awh1-target",
                "candidate": [
                    "constant",
                    "cutoff",
                    "boltzmann",
                    "local-boltzmann",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "awh1-target-beta-scaling",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " For awh1-target=boltzmann and awh1-target=local-boltzmann it is the unitless beta scaling factor taking values in (0,1)."
            },
            {
                "name": "awh1-target-cutoff",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " [kJ mol-1] For awh1-target=cutoff this is the cutoff, should be > 0."
            },
            {
                "name": "awh1-user-data",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "awh1-share-group",
                "candidate": [
                    "0",
                    "positive",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "awh1-ndim",
                "candidate": [
                    ""
                ],
                "defaultValue": "1",
                "comment": " [integer] Number of dimensions of the coordinate, each dimension maps to 1 pull coordinate."
            },
            {
                "name": "awh1-dim1-coord-provider",
                "candidate": [
                    "pull",
                    "fep-lambda",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "awh1-dim1-coord-index",
                "candidate": [
                    ""
                ],
                "defaultValue": "1",
                "comment": " Index of the pull coordinate defining this coordinate dimension."
            },
            {
                "name": "awh1-dim1-force-constant",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " [kJ mol-1 nm-2] or [kJ mol-1 rad-2] Force constant for the (convolved) umbrella potential(s) along this coordinate dimension."
            },
            {
                "name": "awh1-dim1-start",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.0",
                "comment": " [nm] or [deg] Start value of the sampling interval along this dimension."
            },
            {
                "name": "awh1-dim1-end",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.0",
                "comment": " [nm] or [deg] End value defining the sampling interval together with awh1-dim1-start."
            },
            {
                "name": "awh1-dim1-diffusion",
                "candidate": [
                    ""
                ],
                "defaultValue": "10-5",
                "comment": " [nm2/ps], [rad2/ps] or [ps-1] Estimated diffusion constant for this coordinate dimension determining the initial biasing rate."
            },
            {
                "name": "awh1-dim1-cover-diameter",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.0",
                "comment": " [nm] or [deg] Diameter that needs to be sampled by a single simulation around a coordinate value before the point is considered covered in the initial stage (see awh1-growth=exp-linear)."
            }
        ]
    },
    {
        "sectionName": "Enforced rotation",
        
        "sectionData": [
            {
                "name": "rotation",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "rot-ngroups",
                "candidate": [
                    ""
                ],
                "defaultValue": "1",
                "comment": " Number of rotation groups."
            },
            {
                "name": "rot-group0",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "Name of rotation group 0 in the index file."
            },
            {
                "name": "rot-type0",
                "candidate": [
                    ""
                ],
                "defaultValue": "iso",
                "comment": " Type of rotation potential that is applied to rotation group 0."
            },
            {
                "name": "rot-massw0",
                "candidate": [
                    ""
                ],
                "defaultValue": "no",
                "comment": " Use mass weighted rotation group positions."
            },
            {
                "name": "rot-vec0",
                "candidate": [
                    ""
                ],
                "defaultValue": "1.0 0.0 0.0",
                "comment": " Rotation vector, will get normalized."
            },
            {
                "name": "rot-pivot0",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.0 0.0 0.0",
                "comment": " [nm] Pivot point for the potentials iso, pm, rm, and rm2."
            },
            {
                "name": "rot-rate0",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " [degree ps-1] Reference rotation rate of group 0."
            },
            {
                "name": "rot-k0",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " [kJ mol-1 nm-2] Force constant for group 0."
            },
            {
                "name": "rot-slab-dist0",
                "candidate": [
                    ""
                ],
                "defaultValue": "1.5",
                "comment": " [nm] Slab distance, if a flexible axis rotation type was chosen."
            },
            {
                "name": "rot-min-gauss0",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.001",
                "comment": " Minimum value (cutoff) of Gaussian function for the force to be evaluated (for the flexible axis potentials)."
            },
            {
                "name": "rot-eps0",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.0001",
                "comment": " [nm2] Value of additive constant epsilon for rm2* and flex2* potentials."
            },
            {
                "name": "rot-fit-method0",
                "candidate": [
                    ""
                ],
                "defaultValue": "rmsd",
                "comment": " Fitting method when determining the actual angle of a rotation group (can be one of rmsd, norm, or potential)."
            },
            {
                "name": "rot-potfit-nsteps0",
                "candidate": [
                    ""
                ],
                "defaultValue": "21",
                "comment": " For fit type potential, the number of angular positions around the reference angle for which the rotation potential is evaluated."
            },
            {
                "name": "rot-potfit-step0",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.25",
                "comment": " For fit type potential, the distance in degrees between two angular positions."
            },
            {
                "name": "rot-nstrout",
                "candidate": [
                    ""
                ],
                "defaultValue": "100",
                "comment": " Output frequency (in steps) for the angle of the rotation group, as well as for the torque and the rotation potential energy."
            },
            {
                "name": "rot-nstsout",
                "candidate": [
                    ""
                ],
                "defaultValue": "1000",
                "comment": " Output frequency for per-slab data of the flexible axis potentials, i."
            }
        ]
    },
    {
        "sectionName": "NMR refinement",
        
        "sectionData": [
            {
                "name": "disre",
                "candidate": [
                    "no",
                    "simple",
                    "ensemble",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "disre-weighting",
                "candidate": [
                    "equal",
                    "conservative",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "disre-mixed",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "disre-fc",
                "candidate": [
                    ""
                ],
                "defaultValue": "1000",
                "comment": " [kJ mol-1 nm-2] force constant for distance restraints, which is multiplied by a (possibly) different factor for each restraint given in the fac column of the interaction in the topology file."
            },
            {
                "name": "disre-tau",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " [ps] time constant for distance restraints running average."
            },
            {
                "name": "nstdisreout",
                "candidate": [
                    ""
                ],
                "defaultValue": "100",
                "comment": "[steps] period between steps when the running time-averaged and instantaneous distances of all atom pairs involved in restraints are written to the energy file (can make the energy file very large)."
            },
            {
                "name": "orire",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "orire-fc",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": "[kJ mol-1] force constant for orientation restraints, which is multiplied by a (possibly) different weight factor for each restraint, can be set to zero to obtain the orientations from a free simulation."
            },
            {
                "name": "orire-tau",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " [ps] time constant for orientation restraints running average."
            },
            {
                "name": "orire-fitgrp",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "fit group for orientation restraining."
            },
            {
                "name": "nstorireout",
                "candidate": [
                    ""
                ],
                "defaultValue": "100",
                "comment": "[steps] period between steps when the running time-averaged and instantaneous orientations for all restraints, and the molecular order tensor are written to the energy file (can make the energy file very large)."
            }
        ]
    },
    {
        "sectionName": "Free energy calculations",
        
        "sectionData": [
            {
                "name": "free-energy",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "expanded",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "Turns on expanded ensemble simulation, where the alchemical state becomes a dynamic variable, allowing jumping between different Hamiltonians."
            },
            {
                "name": "init-lambda",
                "candidate": [
                    ""
                ],
                "defaultValue": "-1",
                "comment": " starting value for lambda (float)."
            },
            {
                "name": "delta-lambda",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": "increment per time step for lambda."
            },
            {
                "name": "init-lambda-state",
                "candidate": [
                    ""
                ],
                "defaultValue": "-1",
                "comment": " starting value for the lambda state (integer)."
            },
            {
                "name": "fep-lambdas",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "[array] Zero, one or more lambda values for which Delta H values will be determined and written to dhdl."
            },
            {
                "name": "coul-lambdas",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "[array] Zero, one or more lambda values for which Delta H values will be determined and written to dhdl."
            },
            {
                "name": "vdw-lambdas",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "[array] Zero, one or more lambda values for which Delta H values will be determined and written to dhdl."
            },
            {
                "name": "bonded-lambdas",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "[array] Zero, one or more lambda values for which Delta H values will be determined and written to dhdl."
            },
            {
                "name": "restraint-lambdas",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "[array] Zero, one or more lambda values for which Delta H values will be determined and written to dhdl."
            },
            {
                "name": "mass-lambdas",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "[array] Zero, one or more lambda values for which Delta H values will be determined and written to dhdl."
            },
            {
                "name": "temperature-lambdas",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "[array] Zero, one or more lambda values for which Delta H values will be determined and written to dhdl."
            },
            {
                "name": "calc-lambda-neighbors",
                "candidate": [
                    ""
                ],
                "defaultValue": "1",
                "comment": " Controls the number of lambda values for which Delta H values will be calculated and written out, if init-lambda-state has been set."
            },
            {
                "name": "sc-function",
                "candidate": [
                    "beutler",
                    "gapsys",
                    ""
                ],
                "defaultValue": "",
                "comment": "Gapsys et al."
            },
            {
                "name": "sc-alpha",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " for sc-function=beutler the soft-core alpha parameter, a value of 0 results in linear interpolation of the LJ and Coulomb interactions."
            },
            {
                "name": "sc-r-power",
                "candidate": [
                    ""
                ],
                "defaultValue": "6",
                "comment": " power 6 for the radial term in the soft-core equation."
            },
            {
                "name": "sc-coul",
                "candidate": [
                    ""
                ],
                "defaultValue": "no",
                "comment": " Whether to apply the soft-core free energy interaction transformation to the Columbic interaction of a molecule."
            },
            {
                "name": "sc-power",
                "candidate": [
                    ""
                ],
                "defaultValue": "1",
                "comment": " the power for lambda in the soft-core function, only the values 1 and 2 are supported."
            },
            {
                "name": "sc-sigma",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.3",
                "comment": " [nm] for sc-function=beutler the soft-core sigma for particles which have a C6 or C12 parameter equal to zero or a sigma smaller than sc-sigma."
            },
            {
                "name": "sc-gapsys-scale-linpoint-lj",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.85",
                "comment": " for sc-function=gapsys it is the unitless alphaLJ parameter."
            },
            {
                "name": "sc-gapsys-scale-linpoint-q",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.3",
                "comment": " [nm/e^2] For sc-function=gapsys the alphaQ parameter with the unit of [nm/e^2] and default value of 0."
            },
            {
                "name": "sc-gapsys-sigma-lj",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.3",
                "comment": " [nm] for sc-function=gapsys the soft-core sigma for particles which have a C6 or C12 parameter equal to zero."
            },
            {
                "name": "couple-moltype",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "Here one can supply a molecule type (as defined in the topology) for calculating solvation or coupling free energies."
            },
            {
                "name": "couple-lambda0",
                "candidate": [
                    "vdw-q",
                    "vdw",
                    "q",
                    "none",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "couple-lambda1",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "analogous to couple-lambda1, but for lambda=1."
            },
            {
                "name": "couple-intramol",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "nstdhdl",
                "candidate": [
                    ""
                ],
                "defaultValue": "100",
                "comment": " the frequency for writing dH/dlambda and possibly Delta H to dhdl."
            },
            {
                "name": "dhdl-derivatives",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "If yes (the default), the derivatives of the Hamiltonian with respect to lambda at each nstdhdl step are written out."
            },
            {
                "name": "dhdl-print-energy",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "Include either the total or the potential energy in the dhdl file."
            },
            {
                "name": "separate-dhdl-file",
                "candidate": [
                    "yes",
                    "no",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "dh-hist-size",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " If nonzero, specifies the size of the histogram into which the Delta H values (specified with foreign lambda) and the derivative dH/dl values are binned, and written to ener."
            },
            {
                "name": "dh-hist-spacing",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.1",
                "comment": " Specifies the bin width of the histograms, in energy units."
            }
        ]
    },
    {
        "sectionName": "Expanded Ensemble calculations",
        
        "sectionData": [
            {
                "name": "nstexpanded",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "The number of integration steps beween attempted moves changing the system Hamiltonian in expanded ensemble simulations."
            },
            {
                "name": "lmc-stats",
                "candidate": [
                    "no",
                    "metropolis-transition",
                    "barker-transition",
                    "wang-landau",
                    "min-variance",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "lmc-mc-move",
                "candidate": [
                    "no",
                    "metropolis-transition",
                    "barker-transition",
                    "gibbs",
                    "metropolized-gibbs",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "lmc-seed",
                "candidate": [
                    ""
                ],
                "defaultValue": "-1",
                "comment": " random seed to use for Monte Carlo moves in state space."
            },
            {
                "name": "mc-temperature",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "Temperature used for acceptance/rejection for Monte Carlo moves."
            },
            {
                "name": "wl-ratio",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.8",
                "comment": " The cutoff for the histogram of state occupancies to be reset, and the free energy incrementor to be changed from delta to delta * wl-scale."
            },
            {
                "name": "wl-scale",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.8",
                "comment": " Each time the histogram is considered flat, then the current value of the Wang-Landau incrementor for the free energies is multiplied by wl-scale."
            },
            {
                "name": "init-wl-delta",
                "candidate": [
                    ""
                ],
                "defaultValue": "1.0",
                "comment": " The initial value of the Wang-Landau incrementor in kT."
            },
            {
                "name": "wl-oneovert",
                "candidate": [
                    ""
                ],
                "defaultValue": "no",
                "comment": " Set Wang-Landau incrementor to scale with 1/(simulation time) in the large sample limit."
            },
            {
                "name": "lmc-repeats",
                "candidate": [
                    ""
                ],
                "defaultValue": "1",
                "comment": " Controls the number of times that each Monte Carlo swap type is performed each iteration."
            },
            {
                "name": "lmc-gibbsdelta",
                "candidate": [
                    ""
                ],
                "defaultValue": "-1",
                "comment": " Limit Gibbs sampling to selected numbers of neighboring states."
            },
            {
                "name": "lmc-forced-nstart",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " Force initial state space sampling to generate weights."
            },
            {
                "name": "nst-transition-matrix",
                "candidate": [
                    ""
                ],
                "defaultValue": "-1",
                "comment": " Frequency of outputting the expanded ensemble transition matrix."
            },
            {
                "name": "symmetrized-transition-matrix",
                "candidate": [
                    ""
                ],
                "defaultValue": "no",
                "comment": " Whether to symmetrize the empirical transition matrix."
            },
            {
                "name": "mininum-var-min",
                "candidate": [
                    ""
                ],
                "defaultValue": "100",
                "comment": " The min-variance strategy (option of lmc-stats is only valid for larger number of samples, and can get stuck if too few samples are used at each state."
            },
            {
                "name": "init-lambda-weights",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "The initial weights (free energies) used for the expanded ensemble states."
            },
            {
                "name": "lmc-weights-equil",
                "candidate": [
                    "no",
                    "yes",
                    "wl-delta",
                    "number-all-lambda",
                    "number-steps",
                    "number-samples",
                    "count-ratio",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "simulated-tempering",
                "candidate": [
                    ""
                ],
                "defaultValue": "no",
                "comment": " Turn simulated tempering on or off."
            },
            {
                "name": "sim-temp-low",
                "candidate": [
                    ""
                ],
                "defaultValue": "300",
                "comment": " [K] Low temperature for simulated tempering."
            },
            {
                "name": "sim-temp-high",
                "candidate": [
                    ""
                ],
                "defaultValue": "300",
                "comment": " [K] High temperature for simulated tempering."
            },
            {
                "name": "simulated-tempering-scaling",
                "candidate": [
                    "linear",
                    "geometric",
                    "exponential",
                    ""
                ],
                "defaultValue": "",
                "comment": "Controls the way that the temperatures at intermediate lambdas are calculated from the temperature-lambdas part of the lambda vector."
            }
        ]
    },
    {
        "sectionName": "Non-equilibrium MD",
        
        "sectionData": [
            {
                "name": "acc-grps",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "groups for constant acceleration (e."
            },
            {
                "name": "accelerate",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " [nm ps-2] acceleration for acc-grps; x, y and z for each group (e."
            },
            {
                "name": "freezegrps",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "Groups that are to be frozen (i."
            },
            {
                "name": "freezedim",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "dimensions for which groups in freezegrps should be frozen, specify Y or N for X, Y and Z and for each group (e."
            },
            {
                "name": "cos-acceleration",
                "candidate": [
                    ""
                ],
                "defaultValue": "0",
                "comment": " [nm ps-2] the amplitude of the acceleration profile for calculating the viscosity."
            },
            {
                "name": "deform",
                "candidate": [
                    ""
                ],
                "defaultValue": "0 0 0 0 0 0",
                "comment": " [nm ps-1] The velocities of deformation for the box elements: a(x) b(y) c(z) b(x) c(x) c(y)."
            }
        ]
    },
    {
        "sectionName": "Electric fields",
        
        "sectionData": [
            {
                "name": "electric-field-x",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "electric-field-y",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "electric-field-z",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "Read more at Electric fields and in ref."
            }
        ]
    },
    {
        "sectionName": "Mixed quantum/classical molecular dynamics",
        
        "sectionData": [
            {
                "name": "QMMM-grps",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "groups to be descibed at the QM level for MiMiC QM/MM."
            },
            {
                "name": "QMMM",
                "candidate": [
                    "no",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            }
        ]
    },
    {
        "sectionName": "Computational Electrophysiology",
        
        "sectionData": [
            {
                "name": "swapcoords",
                "candidate": [
                    "no",
                    "X ; Y ; Z",
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "swap-frequency",
                "candidate": [
                    ""
                ],
                "defaultValue": "1",
                "comment": " The swap attempt frequency, i."
            },
            {
                "name": "split-group0",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "Name of the index group of the membrane-embedded part of channel #0."
            },
            {
                "name": "split-group1",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "Channel #1 defines the position of the other compartment boundary."
            },
            {
                "name": "massw-split0",
                "candidate": [
                    "no",
                    "yes",
                    ""
                ],
                "defaultValue": "no",
                "comment": " Defines whether or not mass-weighting is used to calculate the split group center."
            },
            {
                "name": "massw-split1",
                "candidate": [
                    ""
                ],
                "defaultValue": "no",
                "comment": " As above, but for split-group #1."
            },
            {
                "name": "solvent-group",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "Name of the index group of solvent molecules."
            },
            {
                "name": "coupl-steps",
                "candidate": [
                    ""
                ],
                "defaultValue": "10",
                "comment": " Average the number of ions per compartment over these many swap attempt steps."
            },
            {
                "name": "iontypes",
                "candidate": [
                    ""
                ],
                "defaultValue": "1",
                "comment": " The number of different ion types to be controlled."
            },
            {
                "name": "iontype0-name",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": "Name of the first ion type."
            },
            {
                "name": "iontype0-in-A",
                "candidate": [
                    ""
                ],
                "defaultValue": "-1",
                "comment": " Requested (=reference) number of ions of type 0 in compartment A."
            },
            {
                "name": "iontype0-in-B",
                "candidate": [
                    ""
                ],
                "defaultValue": "-1",
                "comment": " Reference number of ions of type 0 for compartment B."
            },
            {
                "name": "bulk-offsetA",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.0",
                "comment": " Offset of the first swap layer from the compartment A midplane."
            },
            {
                "name": "bulk-offsetB",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.0",
                "comment": " Offset of the other swap layer from the compartment B midplane."
            },
            {
                "name": "threshold",
                "candidate": [
                    ""
                ],
                "defaultValue": "1",
                "comment": " Only swap ions if threshold difference to requested count is reached."
            },
            {
                "name": "cyl0-r",
                "candidate": [
                    ""
                ],
                "defaultValue": "2.0",
                "comment": " [nm] Radius of the split cylinder #0."
            },
            {
                "name": "cyl0-up",
                "candidate": [
                    ""
                ],
                "defaultValue": "1.0",
                "comment": " [nm] Upper extension of the split cylinder #0."
            },
            {
                "name": "cyl0-down",
                "candidate": [
                    ""
                ],
                "defaultValue": "1.0",
                "comment": " [nm] Lower extension of the split cylinder #0."
            },
            {
                "name": "cyl1-r",
                "candidate": [
                    ""
                ],
                "defaultValue": "2.0",
                "comment": " [nm] Radius of the split cylinder #1."
            },
            {
                "name": "cyl1-up",
                "candidate": [
                    ""
                ],
                "defaultValue": "1.0",
                "comment": " [nm] Upper extension of the split cylinder #1."
            },
            {
                "name": "cyl1-down",
                "candidate": [
                    ""
                ],
                "defaultValue": "1.0",
                "comment": " [nm] Lower extension of the split cylinder #1."
            }
        ]
    },
    {
        "sectionName": "Density-guided simulations",
        
        "sectionData": [
            {
                "name": "density-guided-simulation-active",
                "candidate": [
                    ""
                ],
                "defaultValue": "no",
                "comment": " Activate density-guided simulations."
            },
            {
                "name": "density-guided-simulation-group",
                "candidate": [
                    ""
                ],
                "defaultValue": "protein",
                "comment": " The atoms that are subject to the forces from the density-guided simulation and contribute to the simulated density."
            },
            {
                "name": "density-guided-simulation-similarity-measure",
                "candidate": [
                    "inner-product",
                    "relative-entropy",
                    "cross-correlation",
                    ""
                ],
                "defaultValue": "inner-product",
                "comment": " Similarity measure between the density that is calculated from the atom positions and the reference density."
            },
            {
                "name": "density-guided-simulation-atom-spreading-weight",
                "candidate": [
                    "unity",
                    "mass",
                    "charge",
                    ""
                ],
                "defaultValue": "unity",
                "comment": " Determines the multiplication factor for the Gaussian kernel when spreading atoms on the grid."
            },
            {
                "name": "density-guided-simulation-force-constant",
                "candidate": [
                    ""
                ],
                "defaultValue": "1e+09",
                "comment": " [kJ mol-1] The scaling factor for density-guided simulation forces."
            },
            {
                "name": "density-guided-simulation-gaussian-transform-spreading-width",
                "candidate": [
                    ""
                ],
                "defaultValue": "0.2",
                "comment": " [nm] The Gaussian RMS width for the spread kernel for the simulated density."
            },
            {
                "name": "density-guided-simulation-gaussian-transform-spreading-range-in-multiples-of-width",
                "candidate": [
                    ""
                ],
                "defaultValue": "4",
                "comment": " The range after which the gaussian is cut off in multiples of the Gaussian RMS width described above."
            },
            {
                "name": "density-guided-simulation-reference-density-filename",
                "candidate": [
                    ""
                ],
                "defaultValue": "reference.mrc",
                "comment": " Reference density file name using an absolute path or a path relative to the to the folder from which gmx mdrun is called."
            },
            {
                "name": "density-guided-simulation-nst",
                "candidate": [
                    ""
                ],
                "defaultValue": "1",
                "comment": " Interval in steps at which the density fitting forces are evaluated and applied."
            },
            {
                "name": "density-guided-simulation-normalize-densities",
                "candidate": [
                    ""
                ],
                "defaultValue": "true",
                "comment": " Normalize the sum of density voxel values to one for the reference density as well as the simulated density."
            },
            {
                "name": "density-guided-simulation-adaptive-force-scaling",
                "candidate": [
                    "true",
                    ""
                ],
                "defaultValue": "false",
                "comment": " Adapt the force constant to ensure a steady increase in similarity between simulated and reference density."
            },
            {
                "name": "density-guided-simulation-adaptive-force-scaling-time-constant",
                "candidate": [
                    ""
                ],
                "defaultValue": "4",
                "comment": " [ps] Couple force constant to increase in similarity with reference density with this time constant."
            },
            {
                "name": "density-guided-simulation-shift-vector",
                "candidate": [
                    ""
                ],
                "defaultValue": "0,0,0",
                "comment": " [nm] Add this vector to all atoms in the density-guided-simulation-group before calculating forces and energies for density-guided-simulations."
            },
            {
                "name": "density-guided-simulation-transformation-matrix",
                "candidate": [
                    ""
                ],
                "defaultValue": "1,0,0,0,1,0,0,0,1",
                "comment": " Multiply all atoms with this matrix in the density-guided-simulation-group before calculating forces and energies for density-guided-simulations."
            }
        ]
    },
    {
        "sectionName": "QM/MM simulations with CP2K Interface",
        
        "sectionData": [
            {
                "name": "qmmm-cp2k-active",
                "candidate": [
                    ""
                ],
                "defaultValue": "false",
                "comment": " Activate QM/MM simulations."
            },
            {
                "name": "qmmm-cp2k-qmgroup",
                "candidate": [
                    ""
                ],
                "defaultValue": "System",
                "comment": " Index group with atoms that are treated with QM."
            },
            {
                "name": "qmmm-cp2k-qmmethod",
                "candidate": [
                    "PBE",
                    "BLYP",
                    "INPUT",
                    ""
                ],
                "defaultValue": "PBE",
                "comment": " Method used to describe the QM part of the system."
            },
            {
                "name": "qmmm-cp2k-qmcharge",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "qmmm-cp2k-qmmultiplicity",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": ""
            },
            {
                "name": "qmmm-cp2k-qmfilenames",
                "candidate": [
                    ""
                ],
                "defaultValue": "",
                "comment": " Names of the CP2K files that will be generated during the simulation."
            }
        ]
    }
]
export default mdpOptions;