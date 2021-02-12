import { render, cleanup, act } from "@testing-library/react";
import React from "react";
import Home from "../pages/index";
import {
  ApolloErrorProvider,
  ApolloLoadingProvider,
  ApolloMockedProvider,
} from "./utils";

afterEach(cleanup);

test("MediaDisplay", async () => {
  const { debug } = render(
    <ApolloErrorProvider>
      <Home />
    </ApolloErrorProvider>
  );

  debug();
  await Promise.resolve()
  debug();
});
