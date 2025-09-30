"use client";
import CharacterCard from "@/components/characters/character-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { characters } from "@/data/characters";
import { Search, Sparkles, X } from "lucide-react";
import { useMemo, useState } from "react";

export default function CharactersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWeapon, setSelectedWeapon] = useState<string>("all");
  const [showNewOnly, setShowNewOnly] = useState(false);

  const weaponsList = useMemo(() => {
    const allWeapons = characters.flatMap((c) => c.weapons.map((w) => w.name));
    return Array.from(new Set(allWeapons)).sort();
  }, []);

  const filteredCharacter = useMemo(() => {
    return characters.filter((char) => {
      const matchesSearch =
        searchQuery === "" ||
        char.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesWeapon =
        selectedWeapon === "all" ||
        char.weapons.some((w) => w.name === selectedWeapon);
      const matchesNew = !showNewOnly || char.new;
      return matchesSearch && matchesWeapon && matchesNew;
    });
  }, [searchQuery, selectedWeapon, showNewOnly]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedWeapon("all");
    setShowNewOnly(false);
  };

  const hasActiveFilters =
    searchQuery !== "" || selectedWeapon !== "all" || showNewOnly;

  return (
    <div className=" container mx-auto px-4 py-2 space-y-8">
      <div>
        <h1 className="text-3xl font-bold grimoire-text origin-font mb-2">
          Characters Database
        </h1>
        <p className="text-muted-foreground">
          {
            "Explore all characters in Seven Deadly Sins Origins with detailed stats and abilities."
          }
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 gap-2 w-5" />
            Search & Filter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search characters..."
                className="w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <Select value={selectedWeapon} onValueChange={setSelectedWeapon}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="All Weapons" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Weapons</SelectItem>
                  {weaponsList.map((weapon) => (
                    <SelectItem key={weapon} value={weapon}>
                      {weapon}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex items-center gap-2 px-3 py-2 border rounded-md bg-background">
                <Checkbox
                  id="new-characters"
                  checked={showNewOnly}
                  onCheckedChange={(checked) =>
                    setShowNewOnly(checked === true)
                  }
                />
                     <Label
                    htmlFor="new-characters"
                    className="text-sm font-medium cursor-pointer flex items-center gap-1"
                  >
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                    New Only
                  </Label>
              </div>

              {hasActiveFilters && (
                <Button variant={"ghost"} size={"sm"} onClick={clearFilters} className="gap-1">
                    <X className="w-4 h-4" />
                    Clear
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground text-sm">
          Showing {filteredCharacter.length} of {characters.length} characters
        </p>
      </div>
      <div className="px-4 md:pl-6 md:pr-4 flex flex-wrap max-w-screen-xl mt-2">
        {filteredCharacter.map((char) => (
          <CharacterCard
            key={char.id}
            name={char.name}
            imageUrl={char.imageUrl}
            isNew={char.new}
          />
        ))}
      </div>
    </div>
  );
}
