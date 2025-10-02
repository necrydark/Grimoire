import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calculator,
  Calendar,
  Gem,
  MessageCircle,
  Shield,
  Sword,
  TrendingUp,
  Users,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Grimoire",
  description:
    "The comprehensive database for The Seven Deadly Sins: Origins. We are not affiliated with Netmarble.",
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="mystical-glow  transition-transform duration-300">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Join Discord</CardTitle>
                <CardDescription>Connect with the community</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              {
                "Join thousands of players sharing strategies, tips, and the latest game updates."
              }
            </p>
            <Button variant={"secondary"} asChild className="w-full">
              <Link href="https://discord.gg/m9JP8x7EF4" target="_blank">
                Join Server
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="mystical-glow  transition-transform duration-300">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                <Calculator className="w-5 h-5 text-accent" />
              </div>
              <div>
                <CardTitle className="text-lg">Calculator</CardTitle>
                <CardDescription>Plan your builds</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              {
                "Calculate damage, optimize equipment, and plan your character progression."
              }
            </p>
            <Button asChild variant="secondary" className="w-full">
              <Link href="/calculator">Open Calculator</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="mystical-glow  transition-transform duration-300">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-chart-3/20 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-chart-3" />
              </div>
              <div>
                <CardTitle className="text-lg">Current Events</CardTitle>
                <CardDescription>Stay updated</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              {
                "Check active events, limited-time offers, and special campaigns."
              }
            </p>
            <Button asChild variant="outline" className="w-full bg-transparent">
              <Link href="/events">View Events</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="mystical-glow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Gem className="w-6 h-6 text-primary" />
              <div>
                <CardTitle className="text-xl origin-font">
                  {"What's Farmable Today"}
                </CardTitle>
                <CardDescription>Optimize your daily farming</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-chart-2" />
                  <span className="font-medium">Defense Materials</span>
                </div>
                <span className="text-sm text-muted-foreground">Monday</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Sword className="w-4 h-4 text-chart-1" />
                  <span className="font-medium">Attack Materials</span>
                </div>
                <span className="text-sm text-muted-foreground">Tuesday</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-4 h-4 text-chart-4" />
                  <span className="font-medium">Evolution Materials</span>
                </div>
                <span className="text-sm text-muted-foreground">Wednesday</span>
              </div>
            </div>
            <Button asChild className="w-full mt-4">
              <Link href="/farmable">View Full Schedule</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="mystical-glow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-accent" />
              <div>
                <CardTitle className="text-xl origin-font">
                  Database Quick Access
                </CardTitle>
                <CardDescription>Explore characters and items</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Button
                asChild
                variant="outline"
                className="h-16 flex-col gap-2 bg-transparent"
              >
                <Link href="/database/characters">
                  <Users className="w-5 h-5" />
                  <span className="text-sm">Characters</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-16 flex-col gap-2 bg-transparent"
              >
                <Link href="/database/items">
                  <Sword className="w-5 h-5" />
                  <span className="text-sm">Items</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-16 flex-col gap-2 bg-transparent"
              >
                <Link href="/database/materials">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">Materials</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-16 flex-col gap-2 bg-transparent"
              >
                <Link href="/database/equipment">
                  <Gem className="w-5 h-5" />
                  <span className="text-sm">Equipment</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
