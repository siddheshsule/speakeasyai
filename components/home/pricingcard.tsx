import { Label } from '@radix-ui/react-label'
import React from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Plan {
    name: string;
    description: string;
    price: string;
    items: string[];
    paymentLink: string,
}

const PricingCard = ({plan}:{plan:Plan}) => {
  return (
    <div className="flex justify-center">
          <Card className={cn("w-[350px] max-w-lg mb-10", plan.name === 'Pro' && 'border-purple-500 border-2 ')}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <div className="grid w-full items-center gap-4">
                  <div className="flex space-y-1.5 gap-2">
                    <Label
                      htmlFor="name"
                      className="text-5xl font-bold font-sans"
                    >
                      €{plan.price}
                    </Label>
                    <span className="flex flex-col">
                      <span className="text-xs font-extrabold">EUR</span>/month
                    </span>
                  </div>
                  <div className="flex flex-col">
                  {plan.items.map((item, index) => (
                    <Label key = {index} className="font-semibold text-gray-600" htmlFor=""><span className='text-purple-700 font-bold text-xl'>✓</span> {item}</Label>
                  ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button className="rounded-full bg-black"><Link href={plan.paymentLink}>Get SpeakEasy</Link></Button>
            </CardFooter>
          </Card>
        </div>
  )
}

export default PricingCard