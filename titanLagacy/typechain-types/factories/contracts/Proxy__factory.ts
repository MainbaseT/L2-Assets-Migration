/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Proxy, ProxyInterface } from "../../contracts/Proxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "getImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_code",
        type: "bytes",
      },
    ],
    name: "setCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_value",
        type: "bytes32",
      },
    ],
    name: "setStorage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60803461008057601f610ba338819003918201601f19168301916001600160401b038311848410176100855780849260209460405283398101031261008057516001600160a01b0381168103610080577fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355604051610b07908161009c8239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060405260043610610993576000803560e01c90816313af40351461005f575080636c5d4ad01461005a578063893d20e8146100555780639b0b0fda146100505763aaf10f420361099357610548565b61041d565b610329565b610291565b346101c35760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101c3576004358173ffffffffffffffffffffffffffffffffffffffff80831683036101bf577fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610354908116331480156101b7575b1561010f575061010c827fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b80f35b8192507fb79472620000000000000000000000000000000000000000000000000000000060a052600460805261014560c0604052565b60a0608051915afa3d156101ae573d61015d81610257565b9061016b6040519283610216565b8152809260203d92013e5b806101a3575b156109f0576101978160208061019d945183010191016108f9565b15610908565b806109f0565b50602081511461017c565b60609150610176565b5033156100de565b5080fd5b80fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040810190811067ffffffffffffffff82111761021157604052565b6101c6565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761021157604052565b67ffffffffffffffff811161021157601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b346103245760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103245760043567ffffffffffffffff811161032457366023820112156103245780600401356102eb81610257565b906102f96040519283610216565b80825236602482850101116103245760208160009260246103229601838601378301015261069b565b005b600080fd5b34610324576000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101c3577fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610390815473ffffffffffffffffffffffffffffffffffffffff811633148015610415575b156103c657825460405173ffffffffffffffffffffffffffffffffffffffff9091168152602090f35b81809160405160208101907fb794726200000000000000000000000000000000000000000000000000000000825260048152610401816101f5565b51915afa3d156101ae573d61015d81610257565b50331561039d565b346103245760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610324577fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff811633148015610540575b1561049c5760243560043555005b6000809160405160208101907fb7947262000000000000000000000000000000000000000000000000000000008252600481526104d8816101f5565b51915afa3d15610538573d906104ed82610257565b916104fb6040519384610216565b82523d6000602084013e5b8061052d575b156109f05761019781602080610527945183010191016108f9565b386109f0565b50602081511461050c565b606090610506565b50331561048e565b34610324576000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101c3577fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff811633148015610693575b15610603577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5460405173ffffffffffffffffffffffffffffffffffffffff9091168152602090f35b81809160405160208101907fb79472620000000000000000000000000000000000000000000000000000000082526004815261063e816101f5565b51915afa3d1561068a573d61065281610257565b906106606040519283610216565b8152809260203d92013e8061052d57156109f05761019781602080610527945183010191016108f9565b60609150610506565b5033156105ba565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff81163314801561077f575b156106ee57506106ec90610812565b565b6000809160405160208101907fb79472620000000000000000000000000000000000000000000000000000000082526004815261072a816101f5565b51915afa3d15610777573d9061073f82610257565b9161074d6040519384610216565b82523d6000602084013e806101a357156109f0576101978160208061019d945183010191016108f9565b606090610176565b5033156106dd565b1561078e57565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f4c314368756753706c61736850726f78793a20636f646520776173206e6f742060448201527f636f72726563746c79206465706c6f7965642e000000000000000000000000006064820152fd5b907f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5491805190602093848201928320903f146108f357604051848101947f600d380380600d6000396000f300000000000000000000000000000000000000865282519060005b8281106108df57505094816108a9602d826106ec98996108bb97960160008382015203600d810184520182610216565b51906000f092833f9151902014610787565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b848101820151848201602d01528101610879565b50509050565b90816020910312610324575190565b1561090f57565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603560248201527f4c314368756753706c61736850726f78793a2073797374656d2069732063757260448201527f72656e746c79206265696e6720757067726164656400000000000000000000006064820152fd5b6000807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035460405160208101907fb7947262000000000000000000000000000000000000000000000000000000008252600481526104d8816101f5565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff811615610a4d576000808092368280378136915af43d82803e15610a49573d90f35b3d90fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f4c314368756753706c61736850726f78793a20696d706c656d656e746174696f60448201527f6e206973206e6f742073657420796574000000000000000000000000000000006064820152fdfea26469706673582212202ca210549671d49b5994aa02af38c542d48ccd8ec0e40109b8d0042f07015eb364736f6c63430008140033";

type ProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Proxy__factory extends ContractFactory {
  constructor(...args: ProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Proxy> {
    return super.deploy(_owner, overrides || {}) as Promise<Proxy>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override attach(address: string): Proxy {
    return super.attach(address) as Proxy;
  }
  override connect(signer: Signer): Proxy__factory {
    return super.connect(signer) as Proxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProxyInterface {
    return new utils.Interface(_abi) as ProxyInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Proxy {
    return new Contract(address, _abi, signerOrProvider) as Proxy;
  }
}
