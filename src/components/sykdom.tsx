/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/LddRGsc85av
 */
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export function Sykdom() {
  return (
    <div key="1" className="space-y-4 w-full">
      <div className="w-full">
        <input
          aria-label="Søkefelt"
          className="w-1/4 p-2 border-2 border-gray-300 rounded-md"
          placeholder="Søk..."
          type="search"
        />
      </div>
      <Tabs className="w-full" defaultValue="oversikt">
        <TabsList className="grid w-full grid-cols-4 gap-4">
          <TabsTrigger value="oversikt">Oversikt</TabsTrigger>
          <TabsTrigger value="symptomer">Symptomer</TabsTrigger>
          <TabsTrigger value="diagnose">Diagnose</TabsTrigger>
          <TabsTrigger value="behandling">Behandling</TabsTrigger>
        </TabsList>
        <TabsContent value="oversikt">
          <Card>
            <CardHeader>
              <CardTitle>Oversikt</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>Denne delen gir en generell oversikt over den medisinske tilstanden.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="symptomer">
          <Card>
            <CardHeader>
              <CardTitle>Symptomer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>Denne delen lister opp de vanlige symptomene forbundet med den medisinske tilstanden.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="diagnose">
          <Card>
            <CardHeader>
              <CardTitle>Diagnose</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>Denne delen beskriver hvordan den medisinske tilstanden blir diagnostisert.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="behandling">
          <Card>
            <CardHeader>
              <CardTitle>Behandling</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                Denne delen forklarer de forskjellige behandlingsalternativene som er tilgjengelige for den medisinske
                tilstanden.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
