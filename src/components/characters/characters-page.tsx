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
import {
  ArrowDownZA,
  ArrowUpZA,
  Search,
  SortAsc,
  SortDesc,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

type SortOrder = "asc" | "desc";
type SortType = "rarity" | "name";

export default function CharactersTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWeapon, setSelectedWeapon] = useState<string>("all");
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [selectedRarity, setSelectedRarity] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [sortType, setSortType] = useState<SortType>("rarity");

  const weaponsList = Array.from(
    new Set(characters.flatMap((c) => c.weapons.map((w) => w.name)))
  ).sort();

  // filtering logic
  const filteredCharacter = characters.filter((char) => {
    const matchesSearch =
      searchQuery === "" ||
      char.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesWeapon =
      selectedWeapon === "all" ||
      char.weapons.some((w) => w.name === selectedWeapon);

    const matchesNew = !showNewOnly || char.isNew;

    const matchesRarity =
      selectedRarity === "all" || char.rarity === parseInt(selectedRarity);

    return matchesSearch && matchesWeapon && matchesNew && matchesRarity;
  });

  const sortedCharacter = [...filteredCharacter].sort((a, b) => {
    if (sortType === "rarity") {
      const rarityA = a.rarity;
      const rarityB = b.rarity;
      let raritySort: number;
      if (sortOrder === "desc") {
        raritySort = rarityB - rarityA;
      } else {
        raritySort = rarityA - rarityB;
      }
      if (raritySort !== 0) return raritySort;

      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;

      return a.weapons.length - b.weapons.length;
    } else if (sortType === "name") {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (sortOrder === "asc") {
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      } else {
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
      }

      return b.rarity - a.rarity;
    }
    return 0;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedWeapon("all");
    setShowNewOnly(false);
    setSelectedRarity("all");
  };

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedWeapon !== "all" ||
    showNewOnly ||
    selectedRarity !== "all";

  const toggleSortOrder = () => {
    setSortOrder((o) => (o === "asc" ? "desc" : "asc"));
  };

  return (
    <>
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
              {/* Weapon filter */}
              <Select value={selectedWeapon} onValueChange={setSelectedWeapon}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="All Weapons" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="all"
                    className="focus:bg-blue-950 duration-300 transition-all cursor-pointer"
                  >
                    All Weapons
                  </SelectItem>
                  {weaponsList.map((weapon) => (
                    <SelectItem
                      key={weapon}
                      value={weapon}
                      className="focus:bg-blue-950 duration-300 transition-all cursor-pointer"
                    >
                      {weapon}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* New only filter */}
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

              {/* Rarity filter */}
              <Select
                value={selectedRarity}
                onValueChange={(value) => setSelectedRarity(value)}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="All Rarity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="all"
                    className="focus:bg-blue-950 duration-300 transition-all cursor-pointer"
                  >
                    All
                  </SelectItem>
                  <SelectItem
                    value="5"
                    className="focus:bg-blue-950 duration-300 transition-all cursor-pointer"
                  >
                    SSR
                  </SelectItem>
                  <SelectItem
                    value="4"
                    className="focus:bg-blue-950 duration-300 transition-all cursor-pointer"
                  >
                    SR
                  </SelectItem>
                </SelectContent>
              </Select>

              {/* Sort by type (rarity/name) */}
              <Select
                value={sortType}
                onValueChange={(value) => setSortType(value as SortType)}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue>
                    {sortType === "rarity" ? "Sort by Rarity" : "Sort by Name"}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="rarity"
                    className="focus:bg-blue-950 duration-300 transition-all cursor-pointer"
                  >
                    Sort by Rarity
                  </SelectItem>
                  <SelectItem
                    value="name"
                    className="focus:bg-blue-950 duration-300 transition-all cursor-pointer"
                  >
                    Sort by Name
                  </SelectItem>
                </SelectContent>
              </Select>

              {/* Sort order button */}
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="gap-1 flex items-center duration-300 transition-all cursor-pointer"
                aria-label={
                  sortType === "rarity"
                    ? sortOrder === "desc"
                      ? "Sort descending by rarity"
                      : "Sort ascending by rarity"
                    : sortOrder === "desc"
                    ? "Sort Z-A by name"
                    : "Sort A-Z by name"
                }
                onClick={toggleSortOrder}
              >
                {sortType === "rarity" ? (
                  sortOrder === "desc" ? (
                    <>
                      <ArrowDownZA className="w-4 h-4" />
                      Descending
                    </>
                  ) : (
                    <>
                      <ArrowUpZA className="w-4 h-4" />
                      Ascending
                    </>
                  )
                ) : sortOrder === "desc" ? (
                  <>
                    <SortDesc className="w-4 h-4 rotate-180" />
                    Z-A
                  </>
                ) : (
                  <>
                    <SortAsc className="w-4 h-4" />
                    A-Z
                  </>
                )}
              </Button>

              {/* Clear filters */}
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="gap-1 hover:bg-blue-950 duration-300 transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                  Clear
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results count */}
      <div className="flex items-center justify-between mt-2">
        <p className="text-muted-foreground text-sm">
          Showing {sortedCharacter.length} of {characters.length} characters
        </p>
      </div>

      {/* Character grid */}
      <div className="px-4 md:pl-6 md:pr-4 flex flex-wrap max-w-screen-xl mt-2">
        {sortedCharacter.map((char) => (
          <CharacterCard
            id={char.id}
            key={char.id}
            name={char.name}
            imageUrl={char.imageUrl}
            isNew={char.isNew ?? false}
            rarity={char.rarity}
          />
        ))}
      </div>
    </>
  );
}
