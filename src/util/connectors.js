import { Connect, SimpleSigner } from "uport-connect";

// export let uport = new Connect("TruffleBox");

export let uport = new Connect("pulse uport trial", {
  clientId: "2otETwCLC6AeTu3R4stanJXvfZx3CTvoRmd",
  network: "rinkeby",
  signer: SimpleSigner(
    "c267187217c60eab761bed521155f31dc46252cb28e8a5a25d5c02e607b8b8e5"
  )
});

export const web3 = uport.getWeb3();
