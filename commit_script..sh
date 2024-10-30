#!/bin/bash

# Boshlanish va tugash sanalarini kiriting
start_date="2024-02-10"
end_date="2024-10-10"

# Hozirgi sanani boshlanish sanasiga o'rnating
current_date="$start_date"

# Sana oralig'ida ishlash uchun loop
while [ "$current_date" != "$end_date" ]; do
  # Tasodifiy commitlar sonini yaratish (2 dan 10 gacha)
  commit_count=$(shuf -i 2-10 -n 1)

  # Har bir kunda commit_count sonicha commit qilish (har doim 10 tadan oshmaydi)
  for i in $(seq 1 $commit_count); do
    # Faylga kichik o'zgarish kiriting
    echo "Commit #$i on $current_date" > commit_file.txt

    # Gitga qo'shish
    git add commit_file.txt

    # Har bir commit uchun sanani o'zgartirib commit qilish
    GIT_COMMITTER_DATE="$current_date 12:00" git commit --date "$current_date 12:00" -m "Commit #$i on $current_date"
  done

  # Sanani 1 kunga oldinga surish
  current_date=$(date -I -d "$current_date + 1 day")
done

# O'zgartirilgan commitlarni majburiy ravishda push qilish
git push --force