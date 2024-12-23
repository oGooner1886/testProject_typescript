import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { counterAction, counterReducer } from "./counterSlice";
import { CounterSchema } from "../types/CounterSchema";

describe("counterSlice", () => {
  test("decrement", () => {
    const state: CounterSchema = { value: 10 };
    expect(
      counterReducer(state as CounterSchema, counterAction.decrement())
    ).toEqual({value: 9});
  });
  test("increment", () => {
    const state: CounterSchema = { value: 10 };
    expect(
      counterReducer(state as CounterSchema, counterAction.increment())
    ).toEqual({value: 11});
  });
});
