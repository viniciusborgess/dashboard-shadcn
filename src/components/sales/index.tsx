import { CircleDollarSign, DollarSign, User, UsersRound } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Sales() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Últimos clientes
          </CardTitle>
          <User className="ml-auto w-4 h-4"></User>
        </div>
        <CardDescription>Clientes que efetuaram uma compra nas últimas 24 horas</CardDescription>
      </CardHeader>

      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage className="rounded-full" src="https://randomuser.me/api/portraits/men/6.jpg" />
            <AvatarFallback>F</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">André Coelho</p>
            <span className="text-[12px] sm:text-sm text-gray-400">andrecoelho@uol.com.br</span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage className="rounded-full" src="https://randomuser.me/api/portraits/men/4.jpg" />
            <AvatarFallback>F</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Arthur Sampaio</p>
            <span className="text-[12px] sm:text-sm text-gray-400">arthur422@hotmail.com</span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage className="rounded-full" src="https://randomuser.me/api/portraits/men/2.jpg" />
            <AvatarFallback>F</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Gabriel Alves</p>
            <span className="text-[12px] sm:text-sm text-gray-400">alvesgab@outlook.com</span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage className="rounded-full" src="https://randomuser.me/api/portraits/men/7.jpg" />
            <AvatarFallback>F</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Marcio Pereira</p>
            <span className="text-[12px] sm:text-sm text-gray-400">marciopereira8@hotmail.com</span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage className="rounded-full" src="https://randomuser.me/api/portraits/men/12.jpg" />
            <AvatarFallback>F</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Roberto Machado</p>
            <span className="text-[12px] sm:text-sm text-gray-400">machadorob@uol.com.br</span>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}
