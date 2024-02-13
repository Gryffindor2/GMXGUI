var mdpTemplates = [
      {
            "name":"ION",
            "temp":"title=ION"
      },
      {
        "name":"EM",
        "temp":
`title=EM
integrator=steep
nsteps=-1
emtol=1000.0
cutoff-scheme=Verlet
nstlist=1
coulombtype=PME
ns-type=grid
rcoulomb=1.0
rvdw=1.0
fourierspacing=0.15
nstenergy=500`
      },
      {
        "name":"NVT",
        "temp":
`title=OPLS Lysozyme NVT equilibration
define=-DPOSRES
integrator=md
dt=0.002
nsteps=50000
gen-seed=-1
gen-temp=300
gen-seed=-1
gen-vel=yes
cutoff-scheme=Verlet
coulombtype=PME
rcoulomb=1.0
rvdw=1.0
nstxout=500
nstvout=500
nstenergy=500
nstlog=500
continuation=no
constraint-algorithm=lincs
constraints=h-bonds
lincs-iter=1
lincs-order=4
ns-type=grid
DispCorr=EnerPres
pme-order=4
fourierspacing=0.16
tcoupl=V-rescale
tc-grps=Protein Non-Protein
tau-t=0.1     0.1
ref-t=300     300
pcoupl=no`
      },
      {
        "name":"NPT",
        "temp":
`title=OPLS Lysozyme NPT equilibration
define=-DPOSRES
integrator=md
dt=0.002
nsteps=50000
emtol=1000.0
cutoff-scheme=Verlet
ns-type=grid
coulombtype=PME
rcoulomb=1.0
rvdw=1.0
tcoupl=V-rescale
pcoupl=Parrinello-Rahman
nstxout=500
nstvout=500
nstlog=500
nstenergy=500
continuation=yes
constraint-algorithm=lincs
constraints=h-bonds
lincs-iter=1
lincs-order=4
ns-type=grid
DispCorr=EnerPres
pme-order=4
fourierspacing=0.16
tc-grps=Protein Non-Protein
tau-t=0.1     0.1
ref-t=300     300
pcoupltype=isotropic
tau-p=2.0
ref-p=1.0
compressibility=4.5e-5
refcoord-scaling=com
`
      }
]

export default mdpTemplates;