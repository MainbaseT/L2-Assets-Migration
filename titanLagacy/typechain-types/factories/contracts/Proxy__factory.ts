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
  "0x608060405234801561001057600080fd5b50604051610a5f380380610a5f83398101604081905261002f9161005f565b80610058817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b505061008f565b60006020828403121561007157600080fd5b81516001600160a01b038116811461008857600080fd5b9392505050565b6109c18061009e6000396000f3fe60806040526004361061005a5760003560e01c8063893d20e811610043578063893d20e8146100a45780639b0b0fda146100e2578063aaf10f42146101025761005a565b806313af4035146100645780636c5d4ad014610084575b610062610117565b005b34801561007057600080fd5b5061006261007f366004610792565b6103ba565b34801561009057600080fd5b5061006261009f3660046107fe565b61044b565b3480156100b057600080fd5b506100b9610601565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100ee57600080fd5b506100626100fd3660046108cd565b610698565b34801561010e57600080fd5b506100b9610706565b60006101417fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b60408051600481526024810182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fb7947262000000000000000000000000000000000000000000000000000000001790529051919250600091829173ffffffffffffffffffffffffffffffffffffffff8516916101c3919061092a565b600060405180830381855afa9150503d80600081146101fe576040519150601f19603f3d011682016040523d82523d6000602084013e610203565b606091505b5091509150818015610216575080516020145b156102c8576000818060200190518101906102319190610936565b905080156102c6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603560248201527f4c314368756753706c61736850726f78793a2073797374656d2069732063757260448201527f72656e746c79206265696e67207570677261646564000000000000000000000060648201526084015b60405180910390fd5b505b60006102f27f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905073ffffffffffffffffffffffffffffffffffffffff8116610397576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f4c314368756753706c61736850726f78793a20696d706c656d656e746174696f60448201527f6e206973206e6f7420736574207965740000000000000000000000000000000060648201526084016102bd565b3660008037600080366000845af43d6000803e806103b4573d6000fd5b503d6000f35b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610413575033155b1561044357610440817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b50565b610440610117565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806104a4575033155b156104435760006104d37f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b9050803f8251602084012014156104e8575050565b60405160009061051e907f600d380380600d6000396000f30000000000000000000000000000000000000090859060200161094f565b604051602081830303815290604052905060008151602083016000f084516020860120909150813f146105d3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f4c314368756753706c61736850726f78793a20636f646520776173206e6f742060448201527f636f72726563746c79206465706c6f7965642e0000000000000000000000000060648201526084016102bd565b6105fb817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b50505050565b600061062b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610662575033155b1561068d57507fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b610695610117565b90565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806106f1575033155b156106fa579055565b610702610117565b5050565b60006107307fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610767575033155b1561068d57507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6000602082840312156107a457600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146107c857600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561081057600080fd5b813567ffffffffffffffff8082111561082857600080fd5b818401915084601f83011261083c57600080fd5b81358181111561084e5761084e6107cf565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715610894576108946107cf565b816040528281528760208487010111156108ad57600080fd5b826020860160208301376000928101602001929092525095945050505050565b600080604083850312156108e057600080fd5b50508035926020909101359150565b6000815160005b8181101561091057602081850181015186830152016108f6565b8181111561091f576000828601525b509290920192915050565b60006107c882846108ef565b60006020828403121561094857600080fd5b5051919050565b7fffffffffffffffffffffffffff00000000000000000000000000000000000000831681526000610983600d8301846108ef565b94935050505056fea264697066735822122011b925d32995f1b46e6f26b4f7740049415d8d7e8d732c9989bbc8e1c6eb690864736f6c63430008090033";

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
