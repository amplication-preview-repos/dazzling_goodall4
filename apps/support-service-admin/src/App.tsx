import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ArticlesList } from "./articles/ArticlesList";
import { ArticlesCreate } from "./articles/ArticlesCreate";
import { ArticlesEdit } from "./articles/ArticlesEdit";
import { ArticlesShow } from "./articles/ArticlesShow";
import { CollectionsList } from "./collections/CollectionsList";
import { CollectionsCreate } from "./collections/CollectionsCreate";
import { CollectionsEdit } from "./collections/CollectionsEdit";
import { CollectionsShow } from "./collections/CollectionsShow";
import { TicketsList } from "./tickets/TicketsList";
import { TicketsCreate } from "./tickets/TicketsCreate";
import { TicketsEdit } from "./tickets/TicketsEdit";
import { TicketsShow } from "./tickets/TicketsShow";
import { UsersList } from "./users/UsersList";
import { UsersCreate } from "./users/UsersCreate";
import { UsersEdit } from "./users/UsersEdit";
import { UsersShow } from "./users/UsersShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Support Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Articles"
          list={ArticlesList}
          edit={ArticlesEdit}
          create={ArticlesCreate}
          show={ArticlesShow}
        />
        <Resource
          name="Collections"
          list={CollectionsList}
          edit={CollectionsEdit}
          create={CollectionsCreate}
          show={CollectionsShow}
        />
        <Resource
          name="Tickets"
          list={TicketsList}
          edit={TicketsEdit}
          create={TicketsCreate}
          show={TicketsShow}
        />
        <Resource
          name="Users"
          list={UsersList}
          edit={UsersEdit}
          create={UsersCreate}
          show={UsersShow}
        />
      </Admin>
    </div>
  );
};

export default App;
