import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-2">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <Card className="bg-[#303C52] text-white border-0">
          <CardHeader>
            <CardTitle>Welcome To Grimoire! 👋</CardTitle>
          </CardHeader>
          <CardContent>
            Grimoire is the best 7DS Origins companion. It helps you plan what
            to farm, what materials you need for characters with our calculators
            and also features a to-do list for tracking.
          </CardContent>
        </Card>
        <Card className="bg-[#303C52] text-white border-0">
          <CardHeader>
            <CardTitle>Join Our Community</CardTitle>
          </CardHeader>
          <CardContent>
            Join our Discord for the lastest updates, changes and announcements.
            Also discuss about 7DS Origins and feedback for the platform.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
