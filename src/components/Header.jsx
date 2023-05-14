import { ControlPresupuesto } from "./ControlPresupuesto";
import { NewBudget } from "./NewBudget";

export const Header = ({
  presupuesto,
  setGastos,
  setPresupuesto,
  setIsValidPresupuesto,
  isValidPresupuesto,
  gastos,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidPresupuesto ? (
        <ControlPresupuesto
          presupuesto={presupuesto}
          gastos={gastos}
          setGastos={setGastos}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      ) : (
        <NewBudget
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
};
