package in.shanthinath.billingsoftware.repository;

import in.shanthinath.billingsoftware.entity.ItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ItemRepository extends JpaRepository<ItemEntity, Long> {
    Optional<ItemEntity> findByItemId(String itemId);
    Integer countByCategoryId(Long id);
}
