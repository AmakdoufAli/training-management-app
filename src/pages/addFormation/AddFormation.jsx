import { useState, useEffect } from "react";
import Step1 from "../../components/FormationForm/Step1";
import Step2 from "../../components/FormationForm/Step2";
import Step3 from "../../components/FormationForm/Step3";
import {
    useGetVillesQuery,
    useGetRegionsQuery,
    useGetSpecialitesQuery,
    usePostFormationMutation,
} from "../../features/apiSlice";
import Layout from "../../components/template/Layout";

export default function AddFormation(){

    const { data: regions } = useGetRegionsQuery();
    const { data: villes } = useGetVillesQuery();
    const { data: specialites, refetch } = useGetSpecialitesQuery();
    const [step, setStep] = useState(1);
    const [formationId, setFormationId] = useState(null);
    const [refreshNeeded, setRefreshNeeded] = useState(false);
    const [usePostFormation, formationResponse] = usePostFormationMutation();

    useEffect(() => {
        if (refreshNeeded) {
          refetch();
        }
    }, [refreshNeeded]);

    useEffect(() => {
        if (formationResponse.data) {
          setFormationId(formationResponse.data.id);
        }
    }, [formationResponse]);

    return (
        <Layout>
            <div className="w-full bg-white mb-32">
                <div className="">
                    <h1 className="text-2xl font-semibold bg-orange-1 p-5 text-white" style={{ 'borderRadius': '10px 10px 0 0' }}>Formulaire De Planification</h1>
                    <div className="p-2 bg-gray-1 flex flex-row items-center justify-center ">
                        <div className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-semibold bg-blue-500`}>{step > 1 ? <i className="bi bi-check text-2xl"></i> : 1}</div>
                        <div className={`w-32 h-2 ${step >= 2 ? 'bg-blue-500' : 'bg-white'}`}></div>
                        <div className={`w-8 h-8 flex items-center justify-center rounded-full font-semibold ${step >= 2 ? 'bg-blue-500 text-white' : 'bg-white'}`}>{step > 2 ? <i className="bi bi-check text-2xl"></i> : 2}</div>
                        <div className={`w-32 h-2 ${step === 3 ? 'bg-blue-500' : 'bg-white'}`}></div>
                        <div className={`w-8 h-8 flex items-center justify-center rounded-full font-semibold ${step === 3 ? 'bg-blue-500 text-white' : 'bg-white'}`}>3</div>
                    </div>
                </div>
                <div className="my-7">
                    {step === 1 &&
                        <Step1
                            step={step} setStep={setStep}
                            regions={regions}
                            villes={villes}
                            specialites={specialites}
                            formationId={formationId}
                            usePostFormation={usePostFormation}
                        />
                    }
                    {step === 2 &&
                        <Step2
                            specialites={specialites}
                            step={step} setStep={setStep}
                            setRefreshNeeded={setRefreshNeeded}
                            formationId={formationId}
                        />
                    }
                    {step === 3 &&
                        <Step3
                            step={step} setStep={setStep}
                            regions={regions} villes={villes}
                            specialites={specialites}
                            formationId={formationId}
                        />
                    }
                </div>
            </div>
        </Layout>
    )
}