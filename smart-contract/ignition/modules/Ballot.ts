import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BallotModule = buildModule("BallotModule", (m) => {

  const ballot = m.contract("Lock", [["John", "James", "Jessica"]]);

  return { ballot };
});

export default BallotModule;
