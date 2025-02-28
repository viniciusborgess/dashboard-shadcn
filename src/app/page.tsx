import ChartOverview from "@/components/chart";
import Sales from "@/components/sales";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { CreditCard, DollarSign, Percent, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center ">
              <CardTitle className="text-lg sm:text-x1 text-gray-800">
                Total Vendas
                </CardTitle>
                <DollarSign className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
              Vendas realizadas em 90 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$ 40.000</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center ">
              <CardTitle className="text-lg sm:text-x1 text-gray-800">
                Novos Clientes
                </CardTitle>
                <Users className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
              Últimos clientes em 30 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">1294</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center ">
              <CardTitle className="text-lg sm:text-x1 text-gray-800 select-none">
                Pedidos hoje
                </CardTitle>
                <Percent className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
              Total de pedidos hoje
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">113</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center ">
              <CardTitle className="text-lg sm:text-x1 text-gray-800 select-none">
                Pagamentos pendentes
                </CardTitle>
                <CreditCard className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
              Total de pagamentos pendentes em 30 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">83</p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">

        <ChartOverview />
        <Sales/>
      </section>
    </main>
  );
}